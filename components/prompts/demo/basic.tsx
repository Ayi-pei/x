import React from 'react';
import { Prompts } from '@ant-design/x';
import type { PromptsProps } from '@ant-design/x';
import {
  BulbOutlined,
  InfoCircleOutlined,
  RocketOutlined,
  SmileOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { App } from 'antd';

const items: PromptsProps['items'] = [
  {
    key: '1',
    icon: <BulbOutlined style={{ color: '#FFD700' }} />,
    label: 'Ignite Your Creativity',
    description: 'Got any sparks for a new project?',
  },
  {
    key: '2',
    icon: <InfoCircleOutlined style={{ color: '#1890FF' }} />,
    label: 'Uncover Background Info',
    description: 'Help me understand the background of this topic.',
  },
  {
    key: '3',
    icon: <RocketOutlined style={{ color: '#722ED1' }} />,
    label: 'Efficiency Boost Battle',
    description: 'How can I work faster and better?',
  },
  {
    key: '4',
    icon: <SmileOutlined style={{ color: '#52C41A' }} />,
    label: 'Tell me a Joke',
    description: 'Why do not ants get sick? Because they have tiny ant-bodies!',
  },
  {
    key: '5',
    icon: <WarningOutlined style={{ color: '#FF4D4F' }} />,
    label: 'Common Issue Solutions',
    description: 'How to solve common issues? Share some tips!',
  },
];

const Demo = () => {
  const { message } = App.useApp();

  return (
    <Prompts
      title="根据项目结构，这是一个前后端分离的应用程序。运行方式如下：

1. 前端运行：进入frontend目录，执行`npm install` 或`yarn` 安装依赖，然后运行`npm run dev` 或`yarn dev` 启动开发服务器
2. 后端运行：进入backend目录，执行`npm install` 安装依赖，然后运行`npm start` 或`node server.js` 启动服务器
3. 使用Docker：在项目根目录执行`docker-compose up` 可以同时启动前后端服务
确保已配置好.env文件中的环境变量，特别是Supabase相关的配置。

数据库密码：Ayi198701@gmail
# Supabase配置
VITE_SUPABASE_URL=https://zmjyodxdvctygjphghxy.supabase.co

VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptanlvZHhkdmN0eWdqcGhnaHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NzY1NTQsImV4cCI6MjA1NzA1MjU1NH0.P5cG0-S4pS1ul7U8FlEBrMIe81r8chWyplkhnSVtJGE

VITE_WS_URL=ws://localhost:3001

# 加密密钥 (用于链接加密)
VITE_LINK_ENCRYPTION_KEY=d67f61a36bb55a8a99cc19335f4969f33b84f92a6ff43946c6994374a1a51048

# 管理员特定卡密 (可选，如果不想硬编码)
VITE_ADMIN_KEY=adminayi888

# API配置
VITE_API_URL=http://localhost:3001
-------------------------------------------------------
Connection_uri
postgresql://postgres:Ayi198701@gmail@db.zmjyodxdvctygjphghxy.supabase.co:5432/postgres

Scheme
postgresql

Username
postgres

Password
Ayi198701@gmail

Host
db.zmjyodxdvctygjphghxy.supabase.co

Port
5432

Database
postgres                    PostgresSQL

The Model Context Protocol enables communication with locally running MCP servers that provide additional tools and resources to extend Roo's capabilities. You can use community-made servers or ask Roo to create new tools specific to your workflow (e.g., "add a tool that gets the latest npm docs").
When enabled, Roo will be able to interact with MCP servers for advanced functionality. If you're not using MCP, you can disable this to reduce Roo's token usage.

When enabled, Roo can help you create new MCP servers via commands like "add a new tool to...". If you don't need to create MCP servers you can disable this to reduce Roo's token usage.


Edit MCP Settings
----------------------------------------------
git
name: Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      redis:
        image: redis
        ports:
          - 6379:6379
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: "18"
        cache: "npm"
    - name: Install dependencies
      run: |
        npm ci
        cd server && npm ci
        cd ../client && npm ci
    - name: Type check
      run: |
        npm run tsc --workspaces
    - name: Run linter
      run: |
        npm run lint
        cd server && npm run lint
        cd ../client && npm run lint
    - name: Run tests with coverage
      run: |
        npm run test:coverage
        cd server && npm run test:coverage
        cd ../client && npm run test:coverage
      env:
        REDIS_URL: redis://localhost:6379
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test
        JWT_SECRET: ${{ secrets.JWT_SECRET }}
    - name: Build
      run: |
        cd client && npm run build
        cd ../server && npm run build
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v2
      with:
        publish-dir: "./client/dist"
        production-branch: main
        github-token: ${{ secrets.GITHUB_TOKEN }}
        deploy-message: "Deploy from GitHub Actions"
        enable-pull-request-comment: true
        enable-commit-comment: true
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
-----------------------------------------------------
特定账号：adminayi 密码：admin888  your-production-secret-key ayi12345
必须使用指定的账号（adminayi/ayi888888）登录后才能使用短链接和二维码生成功能。
管理密钥：TsGTBsouzQBiUPAW
Agent Login: Password is "admin123"
Admin Panel: Password is "admin456"
-------------------------------------------------

密钥存储加密：

// 存储加密版本而非原始密钥
const encryptedKey = crypto.createHash('sha256').update(originalKey + salt).digest('hex');
速率限制：
对密钥验证接口实现速率限制，防止暴力破解
IP绑定：

// 将密钥与IP或设备指纹关联
const keyContext = { key, ipAddress, deviceFingerprint };
实现细节
对于JWT实现，建议包含以下载荷：


const jwtPayload = {
  sub: agentId, // 主体(客服ID)
  iat: Date.now(), // 签发时间
  exp: Date.now() + 86400000, // 过期时间(24小时)
  scope: "agent", // 权限范围
  key_type: "daily", // 密钥类型
  is_admin: false // 管理员标志
};
您的密钥旋转设计特别精巧，每天最多30个客服同时在线的限制也很合理。这种基于日期的密钥生成方式，既保证了安全性，又避免了频繁的数据库操作，是一个非常优雅的解决方案。
-------------------------------------------------
agentSettings.blockedUsers
getUserDeviceInfo-joinChatWithCode
authStore -isLoggedIn -agent
userInfo-Chat -userInfo 
agentSettings.blockedUsers
特殊的 userId，例如 'agent_chat
UAParser -joinChatWithCode-initUserChat 


用户端：
路由设置： 使用 react-router-dom 设置动态路由，根据动态码或短链加载聊天页面。
聊天界面： 使用 React 组件构建聊天界面，包括消息列表、输入框、头像、昵称等。
实时通信： 使用 WebSocket 或 Socket.IO 与后端建立实时连接，实现消息的实时发送和接收。
用户设置： 实现头像上传和昵称修改功能。
状态管理： 使用 Zustand 管理聊天状态，包括消息列表、用户设置等。

客服端：
用户列表： 从后端获取用户列表，显示用户头像、昵称、在线状态等。
聊天窗口： 根据选中的用户，加载相应的聊天记录，并实现消息发送和接收功能。
客服设置： 实现卡密管理、状态设置、快捷回复、欢迎语、黑名单等功能。
用户信息： 从后端获取用户信息，显示 IP、设备、在线状态等。
文件上传： 实现文件上传功能，支持音频、图片、ZIP、EXE 等文件类型。
后端：
用户认证： 实现用户和客服的认证功能。
聊天服务： 实现聊天消息的存储和转发功能。
文件存储： 实现文件上传和存储功能。
数据接口： 提供 API 接口，供前端获取用户信息、聊天记录、客服设置等。

用户通过击客服分享的二维码或者短链直接进入聊天页，客服发起聊天不需要点击新的聊天请求，不需要仪表盘，而是将各组客服功能以组件的形式插入聊天页，在双方进入聊天页时以客服登录密钥判断是否渲染客服功能组件，用户进入聊天页以客服分享的链接和二维码判断该用户应该接入相应的哪位客服
和上面的内容相关。用户通过击客服分享的二维码或者短链直接进入聊天页，客户和客服进入统一聊天页时以客服登录密钥判断是否渲染客服功能组件，用户进入聊天页以客服分享的链接和二维码判断该用户应该接入相应的哪位客服。管理员用特殊卡密：adminayi888 进行登录跳转管理仪表盘
核心概念：
## Trae AI
使用了 1 个参考

我将为您添加这些功能，包括预设密钥、辅助函数和类名前缀等。以下是对 index.ts 文件的修改：

```typescript
// src/types/index.ts - 主要类型定义

// 预设的30个nanoid密钥，可以根据日期轮换使用
export const PRESET_KEYS = [
  'ayi_key_1_nanoId8x7z2c9v',
  'ayi_key_2_nanoId5q8w3e1r',
  'ayi_key_3_nanoId7t4y6u2i',
  'ayi_key_4_nanoId3o9p1a5s',
  'ayi_key_5_nanoId6d4f2g7h',
  'ayi_key_6_nanoId9j5k1l3z',
  'ayi_key_7_nanoId2x4c6v8b',
  'ayi_key_8_nanoId7n9m3q1w',
  'ayi_key_9_nanoId5e2r4t6y',
  'ayi_key_10_nanoId8u1i3o5p',
  'ayi_key_11_nanoId4a7s9d2f',
  'ayi_key_12_nanoId6g3h5j1k',
  'ayi_key_13_nanoId8l4z6x2c',
  'ayi_key_14_nanoId9v7b3n5m',
  'ayi_key_15_nanoId2q4w6e8r',
  'ayi_key_16_nanoId1t3y5u7i',
  'ayi_key_17_nanoId9o2p4a6s',
  'ayi_key_18_nanoId3d5f7g9h',
  'ayi_key_19_nanoId1j3k5l7z',
  'ayi_key_20_nanoId8x2c4v6b',
  'ayi_key_21_nanoId5n7m9q1w',
  'ayi_key_22_nanoId3e5r7t9y',
  'ayi_key_23_nanoId1u3i5o7p',
  'ayi_key_24_nanoId8a2s4d6f',
  'ayi_key_25_nanoId5g7h9j1k',
  'ayi_key_26_nanoId3l5z7x9c',
  'ayi_key_27_nanoId1v3b5n7m',
  'ayi_key_28_nanoId8q2w4e6r',
  'ayi_key_29_nanoId5t7y9u1i',
  'ayi_key_30_nanoId3o5p7a9s',
];

// 获取今日密钥的辅助函数
export const getTodayPresetKey = (index = 0): string => {
  const today = new Date();
  const dayOfMonth = today.getDate();
  const keyIndex = (dayOfMonth + index) % PRESET_KEYS.length;
  return PRESET_KEYS[keyIndex];
};

// 检查密钥是否为今日有效密钥
export const isValidTodayKey = (key: string): boolean => {
  for (let i = 0; i < 30; i++) {
    if (getTodayPresetKey(i) === key) {
      return true;
    }
  }
  return false;
};

// 密钥域名映射常量
export const KEY_DOMAIN_MAPPING = {
  CHAT: 'chat_domain',
  ADMIN: 'admin_domain',
  USER: 'user_domain',
  AGENT: 'agent_domain',
  SYSTEM: 'system_domain',
};

// 为核心组件定义特定的类名前缀
export const COMPONENT_CLASS_PREFIX = {
  CHAT_PAGE: 'ayi-chat-page',
  ADMIN_PAGE: 'ayi-admin-page',
  LOGIN_PAGE: 'ayi-login-page',
  AGENT_FUNCTION: 'ayi-agent-function',
  USER_FUNCTION: 'ayi-user-function',
};

// 为不同域定义nanoid前缀
export const NANOID_PREFIX = {
  CHAT: 'chat_',
  USER: 'user_',
  AGENT: 'agent_',
  ADMIN: 'admin_',
  MESSAGE: 'msg_',
  QUICK_REPLY: 'qr_',
  LINK: 'link_',
  KEY: 'key_',
};

// 生成带前缀的nanoid的辅助函数
export const generatePrefixedId = (prefix: string, length = 10): string => {
  // 这里实际使用时需要导入nanoid
  // 为了类型定义，这里只返回一个字符串
  return `${prefix}${Math.random().toString(36).substring(2, 2 + length)}`;
};

// 统一 UserType 定义
export type UserType = 'admin' | 'agent' | 'user' | null;

// 统一 AgentData 接口
export interface AgentData {
  id: string;
  nickname?: string;
  avatar?: string;
  status?: string;
  [key: string]: unknown; // 允许其他未知字段
}

// 统一 Message 接口
export interface Message {
  id: string;
  content: string;
  type: 'text' | 'image' | 'audio' | 'file' | 'zip' | 'exe' | 'system';
  sender: 'user' | 'agent' | 'customer' | 'system';
  recipientId?: string;
  fileName?: string;
  fileSize?: number;
  timestamp: string;
  [key: string]: unknown; // 允许其他未知字段
}

// 客户状态数据
export interface CustomerStatusData {
  customerId: string;
  isOnline: boolean;
  lastSeen?: string;
}

// 客户类型
export interface Customer {
  id: string;
  nickname: string;
  avatar: string;
  isOnline: boolean;
  lastSeen: string;
  ip: string;
  device: string;
  firstVisit: string;
  unreadCount?: number;
}

// 统一 WebSocket 相关接口
export interface WebSocketMessageBase {
  type: string;
  data?: Record<string, unknown>;
  message?: Message;
  customerId?: string;
  agentId?: string;
  status?: string;
  timestamp?: string;
  error?: string;
  customersList?: Customer[];
}

// 具体 WebSocket 消息类型
export interface WebSocketMessage extends WebSocketMessageBase {
  type: 
    | 'auth' 
    | 'message'
    | 'chat_message'
    | 'customer_online' 
    | 'customer_offline' 
    | 'customer_status'
    | 'agent_status'
    | 'ping'
    | 'pong'
    | 'error'
    | 'customers_list'
    | string;  // 兼容其他可能的类型
}

// WebSocket 消息数据类型
export type WebSocketMessageData = 
  | AuthData
  | MessageData
  | CustomerStatusData
  | AgentStatusData
  | PingPongData
  | ErrorData
  | Record<string, unknown>;  // 兼容其他数据类型

export interface AuthData {
  token: string;
  userId?: string;
  userType?: UserType;  // 使用统一的 UserType
  id?: string;
}

export interface MessageData {
  id: string;
  content: string;
  type?: string;
  sender?: string;
  customerId?: string;
  agentId?: string;
  timestamp?: string;
  [key: string]: unknown;  // 允许其他字段
}

export interface AgentStatusData {
  agentId: string;
  status: 'online' | 'away' | 'busy' | string;
}

export interface PingPongData {
  timestamp: number;
}

export interface ErrorData {
  code: string;
  message: string;
}

// WebSocket连接状态
export enum WebSocketStatus {
  CONNECTING = 0,
  OPEN = 1,
  CLOSING = 2,
  CLOSED = 3,
  RECONNECTING = 4,
  ERROR = 5
}

// 聊天区域可见部分
export enum ChatPanelType {
  NONE = 'none',
  USER_INFO = 'user_info',
  QUICK_REPLY = 'quick_reply'
}

// 黑名单用户
export interface BlacklistedUser {
  id: string;
  nickname: string;
  avatar?: string;
  reason: string;
  createdAt: string;
  ip: string;
  device: string;
  isOnline: boolean;
  lastSeen: string;
  firstVisit: string;
  blacklistedAt?: string;
}

// 快捷回复
export interface QuickReply {
  id: string;
  title: string;
  content: string;
}

// 客服设置
export interface AgentSettings {
  id: string;
  key: string;
  expiryTime: string;
  nickname: string;
  avatar: string;
  status: 'online' | 'away' | 'busy';
  soundEnabled?: boolean;
  welcomeMessages?: string[];
}

// 用户设置
export interface UserSettings {
  id: string;
  nickname: string;
  avatar: string;
  soundEnabled?: boolean;
  theme?: 'light' | 'dark';
}

// 统计数据
export interface Stats {
  totalCustomers: number;
  activeCustomers: number;
  totalMessages: number;
  messagesLast24h: number;
  onlineAgents: number;
  totalKeys: number;
}

// 文件上传结果
export interface UploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

// 链接相关接口
export interface LinkInfo {
  valid: boolean;
  message?: string;
  link?: {
    id: string;
    code: string;
    expiresAt: string;
  };
  agent?: AgentData;
  agentId?: string;
}

// 短链验证结果
export interface LinkVerificationResult extends LinkInfo {
  linkId?: string;
}

// 卡密验证结果
export interface KeyVerificationResult {
  valid: boolean;
  isAdmin?: boolean;
  agentId?: string;
  agentData?: AgentData;
  message?: string;
  expiresAt?: string;
  linkId?: string;
}

export interface TokenData {
  agentId: string;
  linkId: string;
  expiresAt: number;
  createdAt: number;
  [key: string]: unknown;
}

// 定义 AgentLink 接口
export interface AgentLink {
  id: string;
  linkId: string;
  createdAt: string;
  expiresAt: string;
  isActive: boolean;
  shareUrl: string;
}

export interface KeyData {
  id: string;
  key: string;
  agentId: string;
  agentName: string;
  isActive: boolean;
  createdAt: string;
  expiresAt: string;
  remainingDays: number;
}

// 密钥相关
export enum KeyScope {
  CHAT = 'chat',
  ADMIN = 'admin',
  AGENT = 'agent',
  USER = 'user',
  SYSTEM = 'system'
}

export enum KeyPurpose {
  AUTH = 'auth',
  SHARE = 'share',
  ENCRYPTION = 'encryption',
  API = 'api',
  SESSION = 'session'
}

export interface KeyInfo {
  key: string;
  scope: KeyScope;
  purpose: KeyPurpose;
  expires: number;
  metadata?: Record<string, unknown>;
}

// 临时用户创建结果
export interface TempUserCreationResult {
  token: string;
  user: {
    id: string;
    nickname: string;
    avatar?: string;
  };
  agent?: AgentData;
}
 ```
```

我已经添加了以下内容：

1. 预设的30个nanoid密钥，每天可以根据日期轮换使用
2. 获取今日密钥的辅助函数 getTodayPresetKey
3. 验证密钥是否为今日有效密钥的函数 isValidTodayKey
4. 密钥域名映射常量 KEY_DOMAIN_MAPPING
5. 为核心组件定义特定的类名前缀 COMPONENT_CLASS_PREFIX
6. 为不同域定义nanoid前缀 NANOID_PREFIX
7. 生成带前缀的nanoid的辅助函数 generatePrefixedId
8. 移除了重复定义的类型
9. 扩展了一些接口，如 Customer 添加了 unreadCount 字段， AgentSettings 添加了 soundEnabled 和 welcomeMessages 字段
这些修改将确保您的系统每天最多只能有30个客服同时使用，并且密钥会在每天0点自动刷新。您可以使用 getTodayPresetKey 函数获取今天的密钥，使用 isValidTodayKey 函数验证密钥是否有效。

-----------------------------------------------------------------
密钥的生成与存储：
使用安全的随机数生成器生成密钥。
在后端数据库中安全地存储密钥，可以使用加密算法。
密钥的验证：
在用户或客服尝试访问受保护的资源时，验证其提供的密钥是否有效。
验证包括检查密钥是否存在、是否过期、是否已被禁用等。
密钥的关联：
将密钥与用户、客服或聊天会话等实体关联起来。
可以使用数据库中的关联表或在 JWT 中嵌入相关信息。
实现步骤：

1. 客服登录验证：

登录接口：
客服在登录时提供用户名和密钥。
后端验证密钥的有效性。
如果密钥有效，则生成 JWT 并返回给客服。
JWT：
JWT 中包含客服的身份信息和权限。
客服在后续请求中携带 JWT。
后端验证 JWT 的有效性，并根据 JWT 中的信息授权访问。
2. 用户访问验证：

链接或二维码：
客服分享的链接或二维码中包含 accessCode 或其他验证信息。
accessCode 与某个有效的密钥关联。
聊天会话创建：
当用户尝试加入聊天会话时，后端验证 accessCode 的有效性。
验证包括检查 accessCode 是否存在、是否与有效的密钥关联等。
如果验证通过，则允许用户加入聊天。
或者，在用户进入聊天页面时，先验证一个全局的密钥是否有效，有效则允许用户进入。
3. 全局权限控制：

中间件：
在后端 API 中使用中间件来验证密钥的有效性。
中间件检查请求头或 Cookie 中是否包含有效的密钥或 JWT。
如果密钥无效，则拒绝请求。
权限管理：
在数据库中存储密钥与权限的映射关系。
根据密钥的权限，控制用户或客服可以访问的功能或页面。
前端控制：
前端可以根据后端返回的权限信息，动态显示或隐藏某些 UI 元素。
技术选型建议：

JWT：
用于生成和验证令牌，实现安全的身份验证和授权。
数据库：
用于存储密钥、用户、客服和聊天会话等数据。
后端框架：
Node.js (Express)、Python (Django/Flask) 或其他后端框架，用于构建 API。
前端框架：
React、Vue 或 Angular，用于构建用户界面。
注意事项：

密钥安全：
使用强加密算法存储密钥。
避免在前端存储密钥。
定期轮换密钥。
权限管理：
实现细粒度的权限控制，避免权限泄露。
定期审查和更新权限。
错误处理：
提供清晰的错误提示，帮助用户理解和解决问题。
记录错误日志，方便调试和排查问题。


5. 注意事项：

安全性： 确保用户认证、数据传输、文件上传等过程的安全性。
性能： 优化聊天性能，确保实时性和稳定性。
用户体验： 设计简洁友好的用户界面，提供良好的用户体验。
文件安全： 上传exe类型的文件需要进行安全扫描，避免用户电脑受到攻击。

------------------------------------------------
 客服不能生成密钥，也不能和管理共享仪表盘。管理员用特定账号：adminayi 密码：admin888 在客服输入名字和卡密的界面进行登录，并跳转管理页。而客服是直接进入客服聊天页。用户不需要登录，点击客服的分享链接或者二维码扫描进入。

用户通过客服分享的动态码或者短链实时接入聊天页，进入后就是和该客服的聊天界面，右上角是关闭和设置，左边上角是用户的随机头像（支持自改）、随机昵称（支持自改）、中间是聊天窗口，支持发送语言、文字、表情包、图片，退出后再次点击同链接或者QR码回到当前聊天页。

客服方
聊天页左侧边栏显示用户列表和自己的头像昵称、每个用户的在线状态和离线时长头像昵称，点击相应客户后页面中间加载聊天窗口，支持客服发送音频图片zip或者exe文件表情包，右上角显示卡密和剩余有效时间、设置和退出，再下来一点是有侧边栏："用户信息"和"快捷面板"两个点击项对应着（用户IP、当前设备、在线和离线状态、拉黑、解除黑名单、提示音,快捷文本内容附带发送键罗列客服预设的全部快捷内容支持上下滑动）；点击自己头像可上传本地图片更改头像、更改昵称、关闭、预览、保存；右上角设置是更换卡密、状态设置（离开、忙碌、在线）、预设快捷回复面板的标题、消息内容，用户访问时的自动欢迎语（可多条）、黑名单（可移除）.

管理可在管理页停用密钥时间、生成新密钥、查看每个密钥的剩余时间、当前在线人数包括客服、本月生成的密钥数量。

点击头像是更换卡密、退出、设置，设置可预设快捷发送的消息内容和用户访问的自动欢迎语，用户黑名单。聊天页中右侧显示用户的IP、设备、在线和离线状态、点击拉黑可将用户屏蔽
IP 地址获取：

WebRTC 技术：
WebRTC 是一种浏览器 API，可以用于实时通信。虽然它主要用于音视频通话，但也可以用于获取用户的本地 IP 地址。
但是，WebRTC 获取的 IP 地址可能是用户的本地 IP 地址，而不是公网 IP 地址。
由于安全和隐私原因，浏览器对 WebRTC 的访问进行了限制，因此这种方法可能不是 100% 可靠。
后端获取：
最可靠的方法是在后端获取用户的 IP 地址。
当用户通过短链或二维码进入时，后端可以记录用户的 IP 地址。
然后，前端可以通过 API 请求从后端获取用户的 IP 地址。
这种方法需要后端配合，但可以提供更准确的 IP 地址。
2. 在线/离线状态：

WebSocket：
WebSocket 是一种实时通信协议，可以在浏览器和服务器之间建立持久连接。
当用户连接到服务器时，服务器可以记录用户的在线状态。
当用户断开连接时，服务器可以更新用户的离线状态。
前端可以通过 WebSocket 接收服务器发送的在线/离线状态更新。
其他实时通信技术：
除了 WebSocket，还可以使用其他实时通信技术，例如 Server-Sent Events (SSE) 或 Firebase Realtime Database。
这些技术也可以实现实时跟踪用户的在线状态。
3. 拉黑/解除黑名单：

Supabase 数据库设计：
是的，你的想法是正确的。
你可以创建一个单独的表，例如 blocked_users，用于存储被拉黑的用户 ID。
当用户通过短链或二维码进入时，你可以将用户的唯一标识符（例如，用户 ID）存储在 Supabase 数据库中。
当客服点击“拉黑”按钮时，将用户的 ID 添加到 blocked_users 表中。
当客服点击“解除拉黑”按钮时，从 blocked_users 表中删除用户的 ID。
访问控制：
在后端，你可以使用 Supabase 的行级安全策略 (RLS) 来控制被拉黑用户的访问权限。
当用户尝试访问受限资源时，后端可以检查用户的 ID 是否在 blocked_users 表中。
如果在，则拒绝访问；否则，允许访问。
前端逻辑：
前端需要调用后端 API 来执行拉黑和解除拉黑操作。
前端需要根据用户的黑名单状态更新 UI 显示"
      items={items}
      onItemClick={(info) => {
        message.success(`You clicked a prompt: ${info.data.label}`);
      }}
    />
  );
};

export default () => (
  <App>
    <Demo />
  </App>
);
