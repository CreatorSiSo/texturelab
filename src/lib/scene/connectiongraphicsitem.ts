import { SocketGraphicsItem } from "./socketgraphicsitem";
import { GraphicsItem } from "./graphicsitem";

export class ConnectionGraphicsItem extends GraphicsItem {
	id!: string;
	public socketA!: SocketGraphicsItem;
	public socketB!: SocketGraphicsItem;
	public noodleCurving: number;

	constructor() {
		super();
		this.noodleCurving = 40;
	}

	draw(ctx: CanvasRenderingContext2D, renderData: any = null) {
		ctx.beginPath();
		ctx.strokeStyle = "hsl(0, 0%, 70%)";
		ctx.lineWidth = 2;
		ctx.moveTo(this.socketA.centerX(), this.socketA.centerY());
		ctx.bezierCurveTo(
			this.socketA.centerX() + this.noodleCurving,
			this.socketA.centerY(), // control point 1
			this.socketB.centerX() - this.noodleCurving,
			this.socketB.centerY(),
			this.socketB.centerX(),
			this.socketB.centerY()
		);
		ctx.stroke();
	}
}
