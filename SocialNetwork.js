// Exercise 8: Social Network
// Create a basic social network system using a Map where users can follow and be followed by other users. 
// Implement functions to add followers, retrieve followers for a user, 
// and suggest new friends based on common interests.

class SocialNetwork {
  constructor() {
    this.followersMap = new Map();
    this.interestsMap = new Map();
  }

  addFollower(user, follower) {
    if (!this.followersMap.has(user)) {
      this.followersMap.set(user, new Set());
    }
    this.followersMap.get(user).add(follower);
  }

  getFollowers(user) {
    if (!this.followersMap.has(user)) {
      return "User not found";
    }
    return Array.from(this.followersMap.get(user));
  }

  addInterests(user, interests) {
    this.interestsMap.set(user, interests);
  }

  suggestFriends(user) {
    if (!this.followersMap.has(user)) {
      return "User not found";
    }

    const userInterests = this.interestsMap.get(user);
    const potentialFriends = new Map();

    for (const [follower, _] of this.followersMap) {
      if (follower !== user && !this.followersMap.get(follower).has(user)) {
        const followerInterests = this.interestsMap.get(follower);
        const commonInterests = followerInterests.filter(interest => userInterests.includes(interest));
        potentialFriends.set(follower, commonInterests.length);
      }
    }

    const sortedFriends = [...potentialFriends.entries()].sort((a, b) => b[1] - a[1]);
    return sortedFriends.map(friend => friend[0]);
  }
}

const socialNetwork = new SocialNetwork();

socialNetwork.addFollower("Alice", "Bob");
socialNetwork.addFollower("Alice", "Charlie");
socialNetwork.addFollower("Bob", "Alice");
socialNetwork.addFollower("Charlie", "Alice");
socialNetwork.addFollower("David", "Alice");
socialNetwork.addFollower("David", "Charlie");

socialNetwork.addInterests("Alice", ["Music", "Movies", "Books"]);
socialNetwork.addInterests("Bob", ["Movies", "Sports"]);
socialNetwork.addInterests("Charlie", ["Books", "Sports"]);
socialNetwork.addInterests("David", ["Music", "Movies"]);

console.log("Followers of Alice:", socialNetwork.getFollowers("Alice"));
console.log("Suggested friends for Bob:", socialNetwork.suggestFriends("Bob"));
