export const checkServerStatus = async (url: string): Promise<boolean> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

  try {
    await fetch(url, {
      method: "HEAD",
      mode: "no-cors",
      signal: controller.signal,
    });
    return true; // Respondió (Online)
  } catch {
    return false; // Error de red / Timeout (Offline)
  } finally {
    clearTimeout(timeoutId);
  }
};
