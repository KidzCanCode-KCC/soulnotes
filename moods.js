const moods = {
  "afraid": {
    verse: "Isaiah 41:10",
    advice: "God holds you in His hands—fear not.",
    songs: [
      { title: "Fear Is a Liar - Zach Williams", url: "https://www.youtube.com/watch?v=Z4h8tZ6t6J8" },
      { title: "Whom Shall I Fear - Chris Tomlin", url: "https://www.youtube.com/watch?v=4p3nQ0j8Y9I" }
    ]
  },
  "angry": {
    verse: "James 1:19",
    advice: "Pause before you act. Respond with peace.",
    songs: [
      { title: "Control - Tenth Avenue North", url: "https://www.youtube.com/watch?v=Z7m1nX2cQ0E" },
      { title: "Jesus, Friend of Sinners - Casting Crowns", url: "https://www.youtube.com/watch?v=2zXzJ6rJZ6Y" }
    ]
  },
  "anxious": {
    verse: "Philippians 4:6",
    advice: "Take a deep breath and give your worries to God.",
    songs: [
      { title: "Peace Be Still - Hope Darst", url: "https://www.youtube.com/watch?v=Qk0uHc6J9sM" },
      { title: "Oceans - Hillsong UNITED", url: "https://www.youtube.com/watch?v=dy9nwe9_xzw" },
      { title: "Same God - Elevation Worship", url: "https://www.youtube.com/watch?v=Y9p3Xz6WqEo" }
    ]
  },
  "bored": {
    verse: "Ecclesiastes 3:1",
    advice: "There’s a purpose in the stillness too.",
    songs: [
      { title: "Seasons - Hillsong Worship", url: "https://www.youtube.com/watch?v=6g9VnJ6zR1I" },
      { title: "While I'm Waiting - John Waller", url: "https://www.youtube.com/watch?v=8Q0zY5Vd7YQ" }
    ]
  },
  "confused": {
    verse: "Proverbs 3:5-6",
    advice: "Trust His plan, even when it’s unclear.",
    songs: [
      { title: "Way Maker - Sinach", url: "https://www.youtube.com/watch?v=FJ6hJ1JpZ9M" },
      { title: "You Say - Lauren Daigle", url: "https://www.youtube.com/watch?v=KZqk2k7J2tM" }
    ]
  },
  "content": {
    verse: "Philippians 4:11-12",
    advice: "Find joy and peace in your current circumstances.",
    songs: [
      { title: "Goodness of God - Bethel Music", url: "https://www.youtube.com/watch?v=1zq0W2P0J9M" },
      { title: "It Is Well With My Soul - Hymn", url: "https://www.youtube.com/watch?v=Vt1PZ2n9WfM" },
      { title: "Million Little Miracles - Elevation Worship & Maverick City", url: "https://www.youtube.com/watch?v=Z8mQJ0l8Z8M" }
    ]
  },
  "discouraged": {
    verse: "Isaiah 40:31",
    advice: "Wait on the Lord; He will renew your strength.",
    songs: [
      { title: "Praise You In This Storm - Casting Crowns", url: "https://www.youtube.com/watch?v=5wQ3c7l1lVg" },
      { title: "Greater - MercyMe", url: "https://www.youtube.com/watch?v=Yz6lK2k4s8I" }
    ]
  },
  "doubtful": {
    verse: "James 1:6",
    advice: "Ask God for wisdom with full faith.",
    songs: [
      { title: "Trust in You - Lauren Daigle", url: "https://www.youtube.com/watch?v=Jv1X9X5u0z8" },
      { title: "Strong God - Meredith Andrews", url: "https://www.youtube.com/watch?v=7JZ5Y3K9V9M" }
    ]
  },
  "forgiven": {
    verse: "Psalm 103:12",
    advice: "Your sins are cast as far as the east from the west.",
    songs: [
      { title: "Redeemed - Big Daddy Weave", url: "https://www.youtube.com/watch?v=1pQ8fN2R0Jg" },
      { title: "Grace Wins - Matthew West", url: "https://www.youtube.com/watch?v=3V5d8vG8K6M" }
    ]
  },
  "frustrated": {
    verse: "Psalm 37:7",
    advice: "Breathe. Patience brings peace.",
    songs: [
      { title: "Firm Foundation - Cody Carnes & The Belonging Co.", url: "https://www.youtube.com/watch?v=Yb2cQ2X9Y9M" },
      { title: "Still - Hillsong", url: "https://www.youtube.com/watch?v=7z5u4V4Y5V4" }
    ]
  },
  "grateful": {
    verse: "Colossians 3:15",
    advice: "Let gratitude fill your thoughts today.",
    songs: [
      { title: "Gratitude - Brandon Lake", url: "https://www.youtube.com/watch?v=Q0p1Z2n3Y3M" },
      { title: "Thank You Jesus - Hillsong", url: "https://www.youtube.com/watch?v=8X0zY5Vd7YQ" },
      { title: "Praise - Elevation Worship", url: "https://www.youtube.com/watch?v=8Q0zY5Vd7YQ" }
    ]
  },
  "guilty": {
    verse: "1 John 1:9",
    advice: "Confess your sins to God, and He will cleanse you of your guilt.",
    songs: [
      { title: "Clean - Natalie Grant", url: "https://www.youtube.com/watch?v=Z4h8tZ6t6J8" },
      { title: "Forgiven - Crowder", url: "https://www.youtube.com/watch?v=4p3nQ0j8Y9I" }
    ]
  },
  "hopeful": {
    verse: "Romans 15:13",
    advice: "Hope is powerful—let it shine today.",
    songs: [
      { title: "Hope in Front of Me - Danny Gokey", url: "https://www.youtube.com/watch?v=Z7m1nX2cQ0E" },
      { title: "Living Hope - Phil Wickham", url: "https://www.youtube.com/watch?v=2zXzJ6rJZ6Y" }
    ]
  },
  "inspired": {
    verse: "Ephesians 2:10",
    advice: "You are His masterpiece, created for good works.",
    songs: [
      { title: "Do It Again - Elevation Worship", url: "https://www.youtube.com/watch?v=FJ6hJ1JpZ9M" },
      { title: "Limitless - Colton Dixon", url: "https://www.youtube.com/watch?v=KZqk2k7J2tM" }
    ]
  },
  "joyful": {
    verse: "Psalm 100:1",
    advice: "Let your joy be a testimony of God’s goodness.",
    songs: [
      { title: "Joy - For King & Country", url: "https://www.youtube.com/watch?v=6g9VnJ6zR1I" },
      { title: "Happy Dance - MercyMe", url: "https://www.youtube.com/watch?v=8Q0zY5Vd7YQ" },
      { title: "Praise - Elevation Worship", url: "https://www.youtube.com/watch?v=8Q0zY5Vd7YQ" }
    ]
  },
  "lonely": {
    verse: "Deuteronomy 31:6",
    advice: "You are never truly alone. God walks with you.",
    songs: [
      { title: "Never Alone - Hillsong Young & Free", url: "https://www.youtube.com/watch?v=Yb2cQ2X9Y9M" },
      { title: "Never - Tasha Layton", url: "https://www.youtube.com/watch?v=7z5u4V4Y5V4" }
    ]
  },
  "loved": {
    verse: "Romans 5:8",
    advice: "Embrace it, and let it flow out to others, showing compassion and kindness, just as God shows it to you.",
    songs: [
      { title: "Love Of God - Phil Wickham", url: "https://www.youtube.com/watch?v=Q0p1Z2n3Y3M" },
      { title: "Reckless Love - Bethel Music", url: "https://www.youtube.com/watch?v=8X0zY5Vd7YQ" },
      { title: "Unending Love - Jadwin Gillies", url: "https://www.youtube.com/watch?v=8Q0zY5Vd7YQ" }
    ]
  },
  "motivated": {
    verse: "Philippians 4:13",
    advice: "You’ve got this, with strength from above.",
    songs: [
      { title: "Rise - Danny Gokey", url: "https://www.youtube.com/watch?v=Z7m1nX2cQ0E" },
      { title: "Warrior - Hannah Kerr", url: "https://www.youtube.com/watch?v=2zXzJ6rJZ6Y" },
      { title: "Gold - Britt Nicole", url: "https://www.youtube.com/watch?v=7JZ5Y3K9V9M" }
    ]
  },
  "overwhelmed": {
    verse: "Psalm 61:2",
    advice: "When your heart is faint, lead it to the Rock.",
    songs: [
      { title: "Overwhelmed - Big Daddy Weave", url: "https://www.youtube.com/watch?v=1zq0W2P0J9M" },
      { title: "Even If - MercyMe", url: "https://www.youtube.com/watch?v=Vt1PZ2n9WfM" },
      { title: "In Jesus Name - Katy Nichole", url: "https://www.youtube.com/watch?v=2zXzJ6rJZ6Y" },
      { title: "Be Alright - Evan Craft, Danny Gokey, Redimi2", url: "https://www.youtube.com/watch?v=8Q0zY5Vd7YQ" }
    ]
  },
  "peaceful": {
    verse: "John 14:27",
    advice: "Keep walking in that calm. It’s beautiful.",
    songs: [
      { title: "It Is Well - Kristene DiMarco", url: "https://www.youtube.com/watch?v=Yb2cQ2X9Y9M" },
      { title: "Be Still - Hillsong Worship", url: "https://www.youtube.com/watch?v=7z5u4V4Y5V4" }
    ]
  },
  "protective": {
    verse: "Psalm 91:4",
    advice: "He will cover you with His feathers, and under His wings you will find refuge.",
    songs: [
      { title: "The Blessing - Kari Jobe, Cody Carnes, Elevation Worship", url: "https://www.youtube.com/watch?v=Vt1PZ2n9WfM" },
      { title: "Defender - Francesca Battistelli", url: "https://www.youtube.com/watch?v=8Q0zY5Vd7YQ" }
    ]
  },
  "reflective": {
    verse: "Psalm 139:23-24",
    advice: "Search your heart and let God lead you.",
    songs: [
      { title: "So Will I (100 Billion X) - Hillsong UNITED", url: "https://www.youtube.com/watch?v=6g9VnJ6zR1I" },
      { title: "My Lighthouse - Rend Collective", url: "https://www.youtube.com/watch?v=8X0zY5Vd7YQ" }
    ]
  },
  "sad": {
    verse: "Psalm 34:18",
    advice: "He is close to the brokenhearted. Lean on Him.",
    songs: [
      { title: "Thy Will - Hillary Scott", url: "https://www.youtube.com/watch?v=2zXzJ6rJZ6Y" },
      { title: "Even When It Hurts - Hillsong UNITED", url: "https://www.youtube.com/watch?v=7JZ5Y3K9V9M" },
      { title: "It Is Well (Through It All) - Bethel Music", url: "https://www.youtube.com/watch?v=Vt1PZ2n9WfM" },
      { title: "Work It Out - ABLAZE", url: "https://www.youtube.com/watch?v=1zq0W2P0J9M" },
    ]
  },
  "strong": {
    verse: "Philippians 4:13",
    advice: "You can do all things through Christ who strengthens you.",
    songs: [
      { title: "Raise a Hallelujah - Bethel Music", url: "https://www.youtube.com/watch?v=Qk0uHc6J9sM" },
      { title: "Unstoppable God - Sanctus Real", url: "https://www.youtube.com/watch?v=Z7m1nX2cQ0E" }
    ]
  },
  "thankful": {
    verse: "1 Thessalonians 5:18",
    advice: "Keep a spirit of gratitude. Everything is a gift.",
    songs: [
      { title: "Thank You Lord - Chris Tomlin", url: "https://www.youtube.com/watch?v=Q0p1Z2n3Y3M" },
      { title: "Blessings - Laura Story", url: "https://www.youtube.com/watch?v=6g9VnJ6zR1I" },
      { title: "I Thank God - Housefires", url: "https://www.youtube.com/watch?v=7JZ5Y3K9V9M" }
    ]
  },
  "tired": {
    verse: "Matthew 11:28",
    advice: "Rest in Him, you’ve done enough today.",
    songs: [
      { title: "Come to Me - Bethel Music", url: "https://www.youtube.com/watch?v=Yb2cQ2X9Y9M" },
      { title: "Worn - Tenth Avenue North", url: "https://www.youtube.com/watch?v=2zXzJ6rJZ6Y" }
    ]
  },
  "vulnerable": {
    verse: "2 Corinthians 12:9",
    advice: "His grace is sufficient for you, in your weakness.",
    songs: [
      { title: "Scars in Heaven - Casting Crowns", url: "https://www.youtube.com/watch?v=6g9VnJ6zR1I" },
      { title: "Rescue - Lauren Daigle", url: "https://www.youtube.com/watch?v=8X0zY5Vd7YQ" }
    ]
  }
};
