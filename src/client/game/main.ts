import Phaser from "phaser";
import mapScene from "./scenes/mapScene"

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1000,
  height: 700,
  scene: [mapScene]

}

export default new Phaser.Game(config)