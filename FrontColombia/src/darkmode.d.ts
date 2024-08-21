interface Document {
  documentElement: HTMLElement & {
    classList: DOMTokenList;
  }
}
