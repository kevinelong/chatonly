let activity = {
  id: 1,
  author: 2,
  title: "test",
  description: "desc test",
  category: 1,
  lat: "1.100000",
  lng: "1.200000",
  created_at: "2022-11-20T03:22:56.559427Z",
  image: "http://127.0.0.1:8000/media/Message%20Activity/test_jvYWUtY.png",
};

let messageExample = {
  id: 3,
  chat: 3,
  sender: 2,
  activity: undefined,
  message: "test message",
  is_read: false,
  created_at: "2022-11-20T03:22:56.618822Z",
  activities: [],
};

let messageWithActivity = {
  id: 4,
  chat: 3,
  sender: 2,
  activity: 1,
  message: "test message",
  is_read: false,
  created_at: "2022-11-20T03:22:56.639812Z",
  activities: [
    {
      id: 1,
      author: 2,
      title: "test",
      description: "desc test",
      category: 1,
      lat: "1.100000",
      lng: "1.200000",
      created_at: "2022-11-20T03:22:56.559427Z",
      image: "/media/Message%20Activity/test_jvYWUtY.png",
    },
  ],
};

let messageList = [
  {
    id: 1,
    recipient: [3],
    chat_name: "test1__test2",
    chat_creator: 2,
    created_at: "2022-11-20T03:18:38.368016Z",
    messages: [
      {
        id: 1,
        chat: 1,
        sender: 2,
        activity: undefined,
        message: "test message",
        is_read: false,
        created_at: "2022-11-20T03:18:38.411026Z",
        activities: [],
      },
    ],
  },
  {
    id: 2,
    recipient: [3],
    chat_name: "test1__test2",
    chat_creator: 2,
    created_at: "2022-11-20T03:19:32.411910Z",
    messages: [
      {
        id: 2,
        chat: 2,
        sender: 2,
        activity: undefined,
        message: "test message",
        is_read: false,
        created_at: "2022-11-20T03:19:32.447901Z",
        activities: [],
      },
    ],
  },
  {
    id: 3,
    recipient: [3],
    chat_name: "test1__test2",
    chat_creator: 2,
    created_at: "2022-11-20T03:22:56.586438Z",
    messages: [
      {
        id: 3,
        chat: 3,
        sender: 2,
        activity: undefined,
        message: "test message",
        is_read: false,
        created_at: "2022-11-20T03:22:56.618822Z",
        activities: [],
      },
      {
        id: 4,
        chat: 3,
        sender: 2,
        activity: 1,
        message: "test message",
        is_read: false,
        created_at: "2022-11-20T03:22:56.639812Z",
        activities: [
          {
            id: 1,
            author: 2,
            title: "test",
            description: "desc test",
            category: 1,
            lat: "1.100000",
            lng: "1.200000",
            created_at: "2022-11-20T03:22:56.559427Z",
            image: "/media/Message%20Activity/test_jvYWUtY.png",
          },
        ],
      },
    ],
  },
];

let messageListFiltered = {
  id: 3,
  recipient: [3],
  chat_name: "test1__test2",
  chat_creator: 2,
  created_at: "2022-11-20T03:22:56.586438Z",
  messages: [
    {
      id: 3,
      chat: 3,
      sender: 2,
      activity: undefined,
      message: "test message",
      is_read: false,
      created_at: "2022-11-20T03:22:56.618822Z",
      activities: [],
    },
    {
      id: 4,
      chat: 3,
      sender: 2,
      activity: 1,
      message: "test message",
      is_read: false,
      created_at: "2022-11-20T03:22:56.639812Z",
      activities: [
        {
          id: 1,
          author: 2,
          title: "test",
          description: "desc test",
          category: 1,
          lat: "1.100000",
          lng: "1.200000",
          created_at: "2022-11-20T03:22:56.559427Z",
          image: "/media/Message%20Activity/test_jvYWUtY.png",
        },
      ],
    },
  ],
};
