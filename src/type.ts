export interface TaskList{
    id: string,
    title:string,
    done:boolean
}

export enum TaskFilter {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

