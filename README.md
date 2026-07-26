# Smart CuteBot

> 基于 BBC micro:bit、CuteBot 与 ACEBOTT 模块的多模式智能小车 MakeCode 项目。

## 主要功能

- 红外遥控前进、后退、左转、右转和停止
- 双路巡线传感器循迹
- 超声波避障
- 超声波跟随
- LED 控制模式

## 操作方式

红外遥控器按键：

- 方向键：手动控制小车
- OK：停止并返回手动模式
- 数字 1：LED 模式
- 数字 2：巡线模式
- 数字 3：避障模式
- 数字 4：跟随模式

## 硬件连接

当前程序使用：

- `P11`：红外接收
- `P14`、`P15`：超声波模块
- `P0`、`P1`：巡线传感器
- I²C 地址 `0x18`：小车控制

请根据实际硬件版本核对接线与供电。

## 在 MakeCode 中打开

1. 打开 [Microsoft MakeCode for micro:bit](https://makecode.microbit.org/)。
2. 选择“导入”→“导入 URL”。
3. 粘贴以下地址：

```text
https://github.com/September535/Smart_Cutebot
```

本仓库是完整 MakeCode 项目，包含积木与 TypeScript 源码，不是面向其他项目发布的通用扩展。

## 主要依赖

- ELECFREAKS CuteBot
- ACEBOTT
- MakeCode radio 与 microphone

## 支持平台

- BBC micro:bit
- Microsoft MakeCode / PXT
