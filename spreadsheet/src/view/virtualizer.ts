type VirtualizerOptions = {
  overscan?: number;
};

export class Virtualizer {
  constructor(
    private readonly _element: HTMLElement,
    private readonly _options?: VirtualizerOptions,
  ) {}
}
