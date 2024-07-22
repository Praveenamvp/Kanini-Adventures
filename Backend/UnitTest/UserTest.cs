using LoginAPI.Interfaces;
using LoginAPI.Models;
using LoginAPI.Models.DTO;
using LoginAPI.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting; // You need to add this using statement
using Moq;

namespace UnitTest
{
    [TestClass]
    public class UserTest
    {
        private DbContextOptions<Context> GetDbContextOptions()
        {
            var contextOptions = new DbContextOptionsBuilder<Context>()
                .UseInMemoryDatabase(databaseName: "userInMemory")
                .Options;
            return contextOptions;
        }

        [TestMethod]
        public async Task AddAsync()
        {
            using (var userContext = new Context(GetDbContextOptions()))
            {
                userContext.Travelers.Add(new Traveler
                {
                    UserName = "Gimu",
                    MobileNumber = "9444883456",

                    User = new User
                    {
                        PasswordHash = new byte[] { },
                        PasswordKey = new byte[] { },
                        Role = "traveler",
                        UserEmail = "gimu@gmail.com"
                    },
                });
                await userContext.SaveChangesAsync();
            }

        }
        [TestMethod]
        public async Task GetAllAsync()
        {
            // Arrange
            using (var userContext = new Context(GetDbContextOptions()))
            {
                var travelers = new List<Traveler>
{
    new Traveler
    {
        UserName = "Gimu",
        MobileNumber = "9444883456",
        User = new User
        {
            PasswordHash = new byte[] { },
            PasswordKey = new byte[] { },
            Role = "traveler",
            UserEmail = "gimu@gmail.com"
        },
    },
};


                userContext.Travelers.AddRange(travelers);
                await userContext.SaveChangesAsync();

            }

            // Act
            List<Traveler> retrievedTravelers;
            using (var userContext = new Context(GetDbContextOptions()))
            {
                retrievedTravelers = await userContext.Travelers.ToListAsync();
            }

            // Assert
            Assert.IsNotNull(retrievedTravelers);

        }



    }
}
