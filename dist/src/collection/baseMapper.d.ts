import { ICollectionData, ICollection, ICollectionFilter } from './baseModel';
declare function mapFrom<D, I>(data: ICollectionData<D>, itemBaseMapper: (data: D) => I): ICollection<I>;
declare function mapToFilter(data: ICollection<any>): ICollectionFilter;
declare const BaseMapper: {
    mapFrom: typeof mapFrom;
    mapToFilter: typeof mapToFilter;
};
export default BaseMapper;
