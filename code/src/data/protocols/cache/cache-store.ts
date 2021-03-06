import { SavePurchases } from "@/domain/usecases"

export interface CacheStore {
    deleteCallsCount: number
    insertCallsCount: number
    deleteKey: string
    insertKey: string
    insertValues: Array<SavePurchases.Params>

    delete(deleteKey: string): void
    insert(insertKey: string, value: any): void
}
