import { ENTITY } from "src/constants";
import { $api } from ".";
import { IRow } from "src/app/components/Row/Row.types";

export type Payload = Omit<IRow, "id" | "isNew">;

export const OutlayStringController = {
  getAll: async () => {
    const { data } = await $api.get(
      `/outlay-rows/entity/${ENTITY.id}/row/list`
    );
    return data;
  },
  delete: async (id: number) => {
    const { data } = await $api.delete(
      `/outlay-rows/entity/${ENTITY.id}/row/${id}/delete`
    );
    return data;
  },
  create: async (payload: Payload) => {
    const { data } = await $api.post(
      `/outlay-rows/entity/${ENTITY.id}/row/create`,
      payload
    );
    return data;
  },
  update: async (id: number, payload: any) => {
    const { data } = await $api.post(
      `/outlay-rows/entity/${ENTITY.id}/row/${id}/update`,
      payload
    );
    return data;
  },
};
