function canvasctx(angelTo){
			
			
			//平分角度
			var angel = (2 * Math.PI / 360) * (360 / 7);
			var startAngel = 2 * Math.PI / 360 * (-90)
			var endAngel = 2 * Math.PI / 360 * (-90) + angel 
			
			//ctx.clearRect(-150, -150, 150, 150);
			
			//旋转画布
			ctx.save()
            ctx.rotate(angelTo * Math.PI / 180);
			
			//画外圆
			ctx.beginPath();
			ctx.lineWidth = 20;
			ctx.strokeStyle = '#df1e15';
			ctx.arc(0, 0, 135, 0, 2*Math.PI);
			ctx.stroke();
			
			//画里圆
			ctx.beginPath();
			ctx.lineWidth = 15;
			ctx.strokeStyle = '#f4ad26';
			ctx.arc(0, 0, 117, 0, 2*Math.PI);
			ctx.stroke();
			
			//装饰点
			for (var i = 0; i < 12; i++) {
				//装饰点圆心坐标计算
				ctx.beginPath();
				var radius = 125;
                var xr = radius * Math.cos(startAngel)
                var yr = radius * Math.sin(startAngel)
                
                if(i%2==0){
                	ctx.fillStyle = '#fbf0a9';
                } else {
                	ctx.fillStyle = '#fbb936';
                }
                ctx.arc(xr, yr, 10, 0, 2 * Math.PI)
                ctx.fill()
                startAngel += (2 * Math.PI / 360) * (360 / 12);
			}
			
			// 画里转盘
			var colors = ['#ffb933', '#ffe8b5', '#ffb933', '#ffd57c', '#ffb933', '#ffe8b5', '#ffd57c'];
			for(var i = 0; i < 7; i++){
				ctx.beginPath();
				ctx.lineWidth = 130;
				ctx.strokeStyle = colors[i % colors.length];
				ctx.arc(0, 0, 45, startAngel, endAngel)
                ctx.stroke();
                startAngel = endAngel
                endAngel += angel
			}
			
			for (var item in initData.list) {
				awardTitle.push(initData.list[item].name);
				
			}
			
			startAngel = angel / 2
			for (var i = 0; i < 7; i++) {
				ctx.save(); //保存当前环境的状态
				ctx.rotate(startAngel) //旋转当前绘图
				ctx.textAlign = "center";
				ctx.font = '14px Arial';
				ctx.fillStyle = '#5c1e08';
				ctx.fillText(awardTitle[i], 0, -80);
				startAngel += angel
                ctx.restore();
			}
			
			ctx.restore();
		}