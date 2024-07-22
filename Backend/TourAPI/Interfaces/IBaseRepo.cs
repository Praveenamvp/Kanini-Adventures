namespace TourAPI.Interfaces
{
    public interface IBaseRepo<K,T>
    {
        public Task<T?> Get(K key);
        public Task<ICollection<T>?> GetAll();
    }
}
