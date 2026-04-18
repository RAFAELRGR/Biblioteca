export interface Posts{
    id: number;
    userId: number;
    title: string;
    body: string;
}


export type PageSize = 10 | 20 | 50 ;
export type SortField = "id" | "title";