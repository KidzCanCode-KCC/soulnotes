const moods = {
  "afraid": {
    verse: "Isaiah 41:10",
    advice: "God holds you in His hands—fear not.",
    songs: [
      { title: "Fear Is a Liar – Zach Williams", url: "https://www.youtube.com/embed/1srs1YoTVzs" },
      { title: "Whom Shall I Fear – Chris Tomlin", url: "https://www.youtube.com/embed/qOkImV2cJDg" }
    ]
  },
  "angry": {
    verse: "James 1:19",
    advice: "Pause before you act. Respond with peace.",
    songs: [
      { title: "Control – Tenth Avenue North", url: "https://www.youtube.com/embed/2TxkCcP1gkA" },
      { title: "Jesus, Friend of Sinners – Casting Crowns", url: "https://www.youtube.com/embed/rJXIugwiN7Q" }
    ]
  },
  "anxious": {
    verse: "Philippians 4:6",
    advice: "Take a deep breath and give your worries to God.",
    songs: [
      { title: "Peace Be Still – Hope Darst", url: "https://www.youtube.com/embed/gTBYQEL4V9k" },
      { title: "Oceans – Hillsong UNITED", url: "https://www.youtube.com/embed/ybI4JIkAVrA" },
      { title: "Same God – Elevation Worship", url: "https://www.youtube.com/embed/PWYS2kjvYbQ" }
    ]
  },
  "bored": {
    verse: "Ecclesiastes 3:1",
    advice: "There’s a purpose in the stillness too.",
    songs: [
      { title: "Seasons – Hillsong Worship", url: "https://www.youtube.com/embed/h8IvlLHDVcM" },
      { title: "While I'm Waiting – John Waller", url: "https://www.youtube.com/embed/oKpK7gOJRlQ" }
    ]
  },
  "confused": {
    verse: "Proverbs 3:5-6",
    advice: "Trust His plan, even when it’s unclear.",
    songs: [
      { title: "Way Maker – Sinach", url: "https://www.youtube.com/embed/RbpbeQSDb1U" },
      { title: "You Say – Lauren Daigle", url: "https://www.youtube.com/embed/sIaT8Jl2zpI" }
    ]
  },
  "content": {
    verse: "Philippians 4:11-12",
    advice: "Find joy and peace in your current circumstances.",
    songs: [
      { title: "Goodness of God – Bethel Music", url: "https://www.youtube.com/embed/XS1YmewmovA" },
      { title: "It Is Well With My Soul – Hymn", url: "https://www.youtube.com/embed/lhGp9gd_vBo" }
    ]
  },
  "discouraged": {
    verse: "Isaiah 40:31",
    advice: "Wait on the Lord; He will renew your strength.",
    songs: [
      { title: "Praise You In This Storm – Casting Crowns", url: "https://www.youtube.com/embed/ImNshg2yc6M" },
      { title: "Greater – MercyMe", url: "https://www.youtube.com/embed/_JHDfsTb4eo" }
    ]
  },
  "doubtful": {
    verse: "James 1:6",
    advice: "Ask God for wisdom with full faith.",
    songs: [
      { title: "Trust in You – Lauren Daigle", url: "https://www.youtube.com/embed/nBIvO6gdiIk" },
      { title: "Strong God – Meredith Andrews", url: "https://www.youtube.com/embed/u2IoG7WuKTs" }
    ]
  },
  "forgiven": {
    verse: "Psalm 103:12",
    advice: "Your sins are cast as far as the east from the west.",
    songs: [
      { title: "Redeemed – Big Daddy Weave", url: "https://www.youtube.com/embed/9JVmLwYZ8Bs" },
      { title: "Grace Wins – Matthew West", url: "https://www.youtube.com/embed/HCFnBzP7KtQ" }
    ]
  },
  "frustrated": {
    verse: "Psalm 37:7",
    advice: "Breathe. Patience brings peace.",
    songs: [
      { title: "Firm Foundation – Cody Carnes & The Belonging Co.", url: "https://www.youtube.com/embed/ZDbn3_Ykjs4" },
      { title: "Still – Hillsong", url: "https://www.youtube.com/embed/IMWImLBvgnE" }
    ]
  },
  "grateful": {
    verse: "Colossians 3:15",
    advice: "Let gratitude fill your thoughts today.",
    songs: [
      { title: "Gratitude – Brandon Lake", url: "https://www.youtube.com/embed/8-M55UOlE9w" },
      { title: "Thank You Jesus – Hillsong", url: "https://www.youtube.com/embed/xW8q3PwLqCs" },
      { title: "Praise – Elevation Worship", url: "https://www.youtube.com/embed/2p6BtGAZ1Es" }
    ]
  },
  "guilty": {
    verse: "1 John 1:9",
    advice: "Confess your sins to God, and He will cleanse you of your guilt.",
    songs: [
      { title: "Clean – Natalie Grant", url: "https://www.youtube.com/embed/zzyXTimdCZ0" },
      { title: "Forgiven – Crowder", url: "https://www.youtube.com/embed/fZWiW0kUmTY" }
    ]
  },
  "hopeful": {
    verse: "Romans 15:13",
    advice: "Hope is powerful—let it shine today.",
    songs: [
      { title: "Hope in Front of Me – Danny Gokey", url: "https://www.youtube.com/embed/VcQDE7s4uBQ" },
      { title: "Living Hope – Phil Wickham", url: "https://www.youtube.com/embed/DK_0jXPuIr0" }
    ]
  },
  "inspired": {
    verse: "Ephesians 2:10",
    advice: "You are His masterpiece, created for good works.",
    songs: [
      { title: "Do It Again – Elevation Worship", url: "https://www.youtube.com/embed/84Kj57mDXY0" },
      { title: "Limitless – Colton Dixon", url: "https://www.youtube.com/embed/s6jGfeuVPe0" }
    ]
  },
  "joyful": {
    verse: "Psalm 100:1",
    advice: "Let your joy be a testimony of God’s goodness.",
    songs: [
      { title: "Joy – For King & Country", url: "https://www.youtube.com/embed/l0SKyRKc8LQ" },
      { title: "Happy Dance – MercyMe", url: "https://www.youtube.com/embed/PqzDl9CcXno" },
      { title: "Praise – Elevation Worship", url: "https://www.youtube.com/embed/2p6BtGAZ1Es" }
    ]
  },
  "lonely": {
    verse: "Deuteronomy 31:6",
    advice: "You are never truly alone. God walks with you.",
    songs: [
      { title: "Never Alone – Hillsong Young & Free", url: "https://www.youtube.com/embed/6_NvWKaZOpk" },
      { title: "Never – Tasha Layton", url: "https://www.youtube.com/embed/TU7-AwPJjvA" }
    ]
  },
  "motivated": {
    verse: "Philippians 4:13",
    advice: "You’ve got this, with strength from above.",
    songs: [
      { title: "Rise – Danny Gokey", url: "https://www.youtube.com/embed/biAphrKaTN4" },
      { title: "Warrior – Hannah Kerr", url: "https://www.youtube.com/embed/625T4zlOjIs" },
      { title: "Gold – Britt Nicole", url: "https://www.youtube.com/embed/eI5HcaZweUI" }
    ]
  },
  "overwhelmed": {
    verse: "Psalm 61:2",
    advice: "When your heart is faint, lead it to the Rock.",
    songs: [
      { title: "Overwhelmed – Big Daddy Weave", url: "https://www.youtube.com/embed/kN0hX1sHK5M" },
      { title: "Even If – MercyMe", url: "https://www.youtube.com/embed/88OUw4eI30A" },
      { title: "In Jesus Name – Katy Nichole", url: "https://www.youtube.com/embed/2DZcAAgIFQs" }
    ]
  },
  "peaceful": {
    verse: "John 14:27",
    advice: "Keep walking in that calm. It’s beautiful.",
    songs: [
      { title: "It Is Well – Kristene DiMarco", url: "https://www.youtube.com/embed/MPLjFjOVbDM" },
      { title: "Be Still – Hillsong Worship", url: "https://www.youtube.com/embed/I3SX8QvKGIU" }
    ]
  },
  "protective": {
    verse: "Psalm 91:4",
    advice: "He will cover you with His feathers, and under His wings you will find refuge.",
    songs: [
      { title: "The Blessing – Kari Jobe, Cody Carnes & Elevation Worship", url: "https://www.youtube.com/embed/GvuLTi6W7ps" },
      { title: "Defender – Francesca Battistelli", url: "https://www.youtube.com/embed/4xqmT9hP8Jk" }
    ]
  },
  "reflective": {
    verse: "Psalm 139:23-24",
    advice: "Search your heart and let God lead you.",
    songs: [
      { title: "So Will I (100 Billion X) – Hillsong UNITED", url: "https://www.youtube.com/embed/MpuyrrCz1YA" },
      { title: "My Lighthouse – Rend Collective", url: "https://www.youtube.com/embed/zQwKTYbEyF8" }
    ]
  },
  "sad": {
    verse: "Psalm 34:18",
    advice: "He is close to the brokenhearted. Lean on Him.",
    songs: [
      { title: "Thy Will – Hillary Scott", url: "https://www.youtube.com/embed/gQJc506HocI" },
      { title: "Even When It Hurts – Hillsong UNITED", url: "https://www.youtube.com/embed/16yUD64LEbM" },
      { title: "It Is Well (Through It All) – Bethel Music", url: "https://www.youtube.com/embed/CoI4aRZ7u8g" }
    ]
  },
  "strong": {
    verse: "Philippians 4:13",
    advice: "You can do all things through Christ who strengthens you.",
    songs: [
      { title: "Raise a Hallelujah – Bethel Music", url: "https://www.youtube.com/embed/V9n4L_EbRUg" },
      { title: "Unstoppable God – Sanctus Real", url: "https://www.youtube.com/embed/Xj9Yg6UQ5aU" }
    ]
  },
  "thankful": {
    verse: "1 Thessalonians 5:18",
    advice: "Keep a spirit of gratitude. Everything is a gift.",
    songs: [
      { title: "Thank You Lord – Chris Tomlin", url: "https://www.youtube.com/embed/ww5jZ6rZYqE" },
      { title: "Blessings – Laura Story", url: "https://www.youtube.com/embed/SlB34HfiVvo" },
      { title: "I Thank God – Housefires", url: "https://www.youtube.com/embed/xjyZa56JHhY" }
    ]
  },
  "tired": {
    verse: "Matthew 11:28",
    advice: "Rest in Him, you’ve done enough today.",
    songs: [
      { title: "Come to Me – Bethel Music", url: "https://www.youtube.com/embed/KaATpC1wLXU" },
      { title: "Worn – Tenth Avenue North", url: "https://www.youtube.com/embed/9KbhSjl_BRU" }
    ]
  },
  "vulnerable": {
    verse: "2 Corinthians 12:9",
    advice: "His grace is sufficient for you, in your weakness.",
    songs: [
      { title: "Scars in Heaven – Casting Crowns", url: "https://www.youtube.com/embed/b0qX09dM89o" },
      { title: "Rescue – Lauren Daigle", url: "https://www.youtube.com/embed/qtXqnmVcMXs" }
    ]
  }
};
