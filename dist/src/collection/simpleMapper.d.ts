import { ISimpleCollectionData, ISimpleCollection } from './simpleModel';
declare function mapFrom<D, I>(data: ISimpleCollectionData<D>, itemMapper: (data: D) => I): ISimpleCollection<I>;
declare const SimpleMapper: {
    mapFrom: typeof mapFrom;
};
export default SimpleMapper;
