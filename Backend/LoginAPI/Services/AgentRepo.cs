using LoginAPI.Interfaces;
using LoginAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace LoginAPI.Services
{
    public class AgentRepo : IRepo<int, Agent>
    {
        private readonly Context _context;
        private readonly ILogger<AgentRepo> _logger;

        public AgentRepo(Context context, ILogger<AgentRepo> logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<Agent?> Add(Agent item)
        {
            {
                var transaction = _context.Database.BeginTransaction();
                try
                {
                    transaction.CreateSavepoint("Agent");

                    _context.Agents.Add(item);
                    await _context.SaveChangesAsync();
                    transaction.Commit();
                    return item;
                }
                catch (Exception)
                {
                    transaction.RollbackToSavepoint("Agent");
                }
                return null;
            }
        }

        public async Task<Agent?> Delete(int key)
        {
            
                var transaction = _context.Database.BeginTransaction();
                try
                {
                    Agent? agent = await Get(key);

                    _context.Agents.Remove(agent );

                    await _context.SaveChangesAsync();
                    transaction.Commit();

                    return agent;
                }
                catch (Exception ex)
                {

                    _logger.LogError(ex.Message);
                    transaction.Rollback();

                    return null;
                }
                return null;
            
        }

        public async Task<Agent?> Get(int key)
        {
            try
            {
                Agent agent = await _context.Agents.Include(u => u.User).FirstOrDefaultAsync(u => u.Id == key);
                return agent;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public async Task<ICollection<Agent>?> GetAll()
        {
            try
            {
                ICollection<Agent> agents = await _context.Agents.ToListAsync();
                return agents;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public async Task<Agent?> Update(Agent item)
        {
            Agent agent = await Get(item.Id);
            if (agent != null)
            {
                agent.AgentManagerName = item.AgentManagerName;
                agent.AgentMobileNo = item.AgentMobileNo;
                agent.AgentName = item.AgentName;
                agent.AgentAddress = item.AgentAddress;
                agent.State = item.State;
                agent.Country = item.Country;
                agent.LicenseNumber = item.LicenseNumber;
                agent.Status = item.Status;


                await _context.SaveChangesAsync();
                return agent;

            }
            return null;
        }
    }
}