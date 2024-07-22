using LoginAPI.Interfaces;
using LoginAPI.Models;

using Microsoft.EntityFrameworkCore;

namespace LoginAPI.Services
{
    public class UserRepo : IRepo<string, User>
    {
        private readonly Context _context;
        private readonly ILogger<UserRepo> _logger;

        public UserRepo(Context context, ILogger<UserRepo> logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<User?> Add(User item)
        {
            try
            {
                _context.Add(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);


            }
            return null;
        }

        public async Task<User?> Delete(string key)
        {
            User user = await Get(key);
            if (user != null)
            {
                try
                {

                    _context.Remove(user);
                    await _context.SaveChangesAsync();
                    return user;
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex.Message);


                }
            }

            return null;
        }

        public async Task<User?> Get(string key)
        {
            try
            {
                User user = await _context.Users.FirstOrDefaultAsync(u => u.UserEmail == key);
                return user;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public async Task<ICollection<User>?> GetAll()
        {
            try
            {
                ICollection<User> users = await _context.Users.ToListAsync();
                return users;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public async Task<User?> Update(User item)
        {
            User user = await Get(item.UserEmail);
            if (user != null)
            {
                user.PasswordKey = item.PasswordKey;
                user.PasswordHash = item.PasswordHash;
                await _context.SaveChangesAsync();
                return user;
            }
            return null;
        }
    }
}
