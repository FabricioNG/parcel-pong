import Phaser from "phaser";

export default class Racket extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y, w, h, color, velocidad) {
        super(scene x, y, w, h, color);
        scene.add.existing (this);
        scene.physics.add.existing (this);
        this.body.setImmovable(true);
        this.body.allowGravity = false;

        this.velocidad = velocidad;
        this.cursor = scene.input.keyboard.createCursorKeys();
    }


    actualizar() {
        if (this.cursor.left.isDown) {
          this.body.setVelocityX(-this.velocidad);
        } else if (this.cursor.right.isDown) {
          this.body.setVelocityX(this.velocidad);
        } else {
          this.body.setVelocityX(0);
        }
      }
}