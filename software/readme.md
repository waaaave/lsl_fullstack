需求分析和调研 提前设计 oo（面向对象） UML 建模 coding 过程

积分系统 用户忠诚度提升
积分可以用来 兑换
赚取积分，消费积分

    channel             rule

- 消费 根据金额积分 100 10 京豆
- 签到 1
- 评论 2
- 做任务 5

？ 百度一下 不要从 0 开始设计一个系统

1. 用户在获取积分的时候会告知积分的有效期
2. 用户的查询，数量和状态
3. 消费规则

数据库
ID
user_id
credit 积分
channel_id 渠道
create_time 获得时间
expired_time 有效期
event_id 相关的事件 ID

接口文档

- 赚取积分
  url POST（提交表单） /points user_id channel_id event_id credit（+） expired_time 返回 id

- 消费积分
  url POST /points user_id channel_id event_id credit（-） expired_time 返回 id

- 查询积分
  user_id ,所有积分/可用积分/过期积分/时间/临期积分/定向积分/消费过的积分
  分页
