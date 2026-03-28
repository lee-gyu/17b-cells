import { SpreadsheetState } from "../state/spreadsheet-state";
import { Virtualizer } from "./virtualizer";

type SpreadsheetViewOptions = {
  state: SpreadsheetState;
};

export class SpreadsheetView {
  private readonly _virtualizer: Virtualizer;

  constructor(
    private readonly _element: HTMLElement,
    private readonly _options: SpreadsheetViewOptions,
  ) {
    this._virtualizer = new Virtualizer(this._element);
  }
}
