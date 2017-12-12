const description = `
小方块根据输入的指令行动，有效的指令如下：

GO：向蓝色边所面向的方向前进一格
TUN LEF：向左转（逆时针旋转90度）
TUN RIG：向右转（顺时针旋转90度）
TUN BAC：向后转（旋转180度）

TRA LEF：向屏幕的左侧移动一格，方向不变
TRA TOP：向屏幕的上面移动一格，方向不变
TRA RIG：向屏幕的右侧移动一格，方向不变
TRA BOT：向屏幕的下面移动一格，方向不变

MOV LEF：方向转向屏幕左侧，并向屏幕的左侧移动一格
MOV TOP：方向转向屏幕上面，向屏幕的上面移动一格
MOV RIG：方向转向屏幕右侧，向屏幕的右侧移动一格
MOV BOT：方向转向屏幕下面，向屏幕的下面移动一格
`