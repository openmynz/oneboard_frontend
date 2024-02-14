const fetchAccount = async () => {
  const response = await fetch(
    "http://192.168.3.55:8080/api/v1/clientaccounts/"
  );
  const accountData = await response.json();
  return accountData;
};
const addAccount = async (post:unknown) => {
  const response = await fetch(
    "http://192.168.3.55:8080/api/v1/clientaccounts/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }
  );
  return response.json(); 
};
const deleteAccount = async (accountId: string) => {
  try {
    const response = await fetch(
      `http://192.168.3.55:8080/api/v1/clientaccounts/${accountId}/`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error(`Failed to delete account: ${response.statusText}`);
    }
    // Return an empty object since there's no content in the response
    return {};
  } catch (error) {
    console.error("Error deleting account:", error);
    throw error;
  }
};

const fetchProject = async () => {
  const response = await fetch("http://192.168.3.55:8080/api/v1/projects/");
  const projectData = await response.json();
  return projectData;
};
const addProject = async (post: unknown) => {
  const response = await fetch("http://192.168.3.55:8080/api/v1/projects/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return response.json();
};
const deleteProject = async (projectId:unknown) => { try {
  const response = await fetch(
    `http://192.168.3.55:8080/api/v1/projects/${projectId}/`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to delete account: ${response.statusText}`);
  }
  // Return an empty object since there's no content in the response
  return {};
} catch (error) {
  console.error("Error deleting account:", error);
  throw error;
}
};

export {
  fetchAccount,
  fetchProject,
  addAccount,
  deleteAccount,
  addProject,
  deleteProject,
};
