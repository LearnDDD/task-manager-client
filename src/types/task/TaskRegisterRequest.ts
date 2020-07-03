export interface TaskRegisterRequest {
  title: string;
  details: string;
  taskTypeId: number | null;
  parentTaskId: number | null;
}
