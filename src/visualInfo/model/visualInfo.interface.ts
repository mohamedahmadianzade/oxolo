/**
 *
 * @export
 * @interface IVisualInfoOutput
 */
export interface IVisualInfoOutput {
  text: string;
  position: IPosition;
  timeStamp: string;
}
interface IPosition {
  x: number;
  y: number;
}
