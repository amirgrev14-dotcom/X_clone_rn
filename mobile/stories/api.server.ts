const SERVER_URL = process.env.SERVER_URL;
// const SERVER_URL = "http://localhost:5001";

export async function fetchServer(path: string, options?: RequestInit) {
  if (!SERVER_URL) {
    throw new Error("SERVER_URL is not defined");
  }

  const url = new URL(path, SERVER_URL);

  const res = await fetch(url, options);

  const text = await res.text(); // читаем ОДИН раз

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    data = { message: text }; // если это не JSON
  }

  return {
    ...data,
    status: res.status,
  };
}

export const apiShema = {
  get: (path: string) => {
    return fetchServer(path);
  },
  post: (path: string, options?: any) => {
    return fetchServer(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    });
  },
  
// If not need JSON 
  fetch: (path: string, method: string, options?: any) => {
    return fetchServer(path, {
      method: method,
      body: options,
    });
  },

  postToken: (path: string, token: string, options?: any) => {
    return fetchServer(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(options),
    });
  },

  getToken: (path: string, token: string) => {
    return fetchServer(path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

    deleteToken: (path: string, token: string) => {
    return fetchServer(path, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  delete: (path: string) => {
    return fetchServer(path, {
      method: "DELETE",
    });
  },
};