import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

export const getTasksByCompany = async (ctx) => {
  const res = await fetch(
    `${API_URL}/tasks/${ctx.params.companyId}/byCompany`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};

export const getTaskById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/tasks/${ctx.params.taskId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};

export const getTaskTypesByCompany = async (ctx) => {
  const res = await fetch(
    `${API_URL}/taskTypes/byCompany/${ctx.params.companyId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};

export const getTaskTypeById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/taskTypes/${ctx.params.tasktypeId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};

export const getTaskNoticeByCompany = async (ctx) => {
  const res = await fetch(
    `${API_URL}/taskNotices/byCompany/${ctx.params.companyId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
