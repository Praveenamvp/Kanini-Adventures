using System.ComponentModel.DataAnnotations;

namespace LoginAPI.Models.DTO
{
    public class AgentDataDTO
    {
        public string? AgentManagerName { get; set; }

        
        public string? AgentMobileNo { get; set; }
        
        public string? AgentName { get; set; }
    
        
       
        public string? AgentEmail { get; set; }

        public string? LicenseNumber { get; set; }
        public string? Status { get; set; }
    }
}
