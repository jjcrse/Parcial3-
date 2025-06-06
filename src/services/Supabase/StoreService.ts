import { supabase } from "./SupabaseConfig";

export interface pollocks {
  name: string;
  url: string;
  type: "image" | "video" | "gif";
}

export async function uploadpollocks(file: File): Promise<pollocks | null> {
  try {
    if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
      throw new Error("El archivo debe ser una imagen o un video");
    }

    let fileType: "image" | "video" | "gif" = "image";
    if (file.type.startsWith("video/")) fileType = "video";
    else if (file.type === "image/gif") fileType = "gif";

    const MAX_FILE_SIZE = 50 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
      throw new Error("No pudiste subir tus polocks bro?");
    }

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;

    
    const { error: uploadError } = await supabase.storage
      .from("pollockss")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      console.error("Error al subir:", uploadError.message);
      throw new Error(uploadError.message);
    }

    const { data: { publicUrl } } = supabase.storage
      .from("pollockss")
      .getPublicUrl(fileName);

    return {
      name: file.name,
      url: publicUrl,
      type: fileType,
    };
  } catch (error) {
    console.error("Error subiendo pollocks:", (error as Error).message);
    throw error;
  }
}

export async function getpollockss(): Promise<pollocks[]> {
  try {
    const { data, error } = await supabase.storage
      .from("pollockss")
      .list("", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "desc" },
      });

    if (error) {
      console.error("Error al obtener la lista de pollockss:", error.message);
      throw new Error(error.message);
    }

    const filteredData = (data || []).filter(file => file.name !== ".emptyFolderPlaceholder");

    const pollockss = await Promise.all(
      filteredData.map(async (file) => {
        const { data: { publicUrl } } = supabase.storage
          .from("pollockss")
          .getPublicUrl(file.name);

        const ext = file.name.split(".").pop()?.toLowerCase() || "";
        let fileType: "image" | "video" | "gif" = "image";
        if (["mp4", "webm", "mov", "ogg"].includes(ext)) fileType = "video";
        else if (ext === "gif") fileType = "gif";

        return {
          name: file.name,
          url: publicUrl,
          type: fileType,
        };
      })
    );

    return pollockss;
  } catch (error) {
    console.error("Error al obtener los pollockss:", error);
    throw error;
  }
}
