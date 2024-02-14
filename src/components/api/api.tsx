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
const deleteAccount = async (accountId: unknown) => {
  const response = await fetch(
    `http://192.168.3.55:8080/api/v1/clientaccounts/${accountId}/`,
    {
      method: "DELETE",
    }
  );
  return response.json();
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
const deleteProject = async (projectId:unknown) => {
  const response = await fetch(
    `http://192.168.3.55:8080/api/v1/projects/${projectId}/`,
    {
      method: "DELETE",
    }
  );
  return response.json();
};

export {
  fetchAccount,
  fetchProject,
  addAccount,
  deleteAccount,
  addProject,
  deleteProject,
};
