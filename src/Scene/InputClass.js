import Phaser, { Utils } from "phaser";
import * as Initialize from "../utils/Initialize";

class InputClass extends Phaser.Scene {
  constructor() {
    super("InputClass");
  }

  preload() {
    Initialize.preload.call(this); //! ignore initialize preload
    //* start coding here
  }

  create() {
    Initialize.create.call(this, true); //! ignore initialize create
    //* start coding here

    //* ufo = this.player
    //* update by position od pointer
    // this.input.on("pointermove", () => {
    //   this.player.x = this.input.x;
    //   this.player.y = this.input.y;
    // });

    //* move ufo by click, "pointerdown"
    // this.input.on("pointerdown", () => {
    //   this.player.setVelocityY(-100);
    // });

    //* move ufo by check after click, "pointerup"
    // this.input.on("pointerup", () => {
    //   this.player.setVelocityY(-100);
    // });

    //* move ufo by check after click, "pointerover"
    // this.input.on("pointerover", () => {
    //   this.player.setVelocityY(-500);
    // });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.W = this.input.keyboard.addKey("W");
    this.A = this.input.keyboard.addKey("A");
    this.S = this.input.keyboard.addKey("S");
    this.D = this.input.keyboard.addKey("D");

    //* make button interactable
    this.button.setInteractive();

    //* move ufo by click, "pointerdown"
    this.button.on("pointerdown", () => {
      this.player.setVelocityY(-100);
    });
  }

  update() {
    Initialize.update.call(this); //! ignore initialize update
    //* start coding here

    //* use pointer down with player but updat
    if (this.input.activePointer.isDown) {
      this.player.setVelocityY(-100);
    }

    //* this.cursors.up = arrow up
    //* this.cursors.down = arrow down
    //* this.cursors.left = arrow left
    //* this.cursors.right = arrow right

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-100);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(100);
    } else if (this.cursors.left.isDown) {
      this.player.setVelocityX(-100);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(100);
    } else {
      this.player.setVelocityX(0);
    }

    if (this.W.isDown) {
      this.player.setVelocityY(-100);
    } else if (this.S.isDown) {
      this.player.setVelocityY(100);
    }

    if (this.A.isDown) {
      this.player.setVelocityX(-100);
    } else if (this.D.isDown) {
      this.player.setVelocityX(100);
    } else {
      this.player.setVelocityX(0);
    }


  }
}

export default InputClass;
