export class PageComponent {
  private elememt: HTMLUListElement
  constructor() {
    this.elememt = document.createElement('ul')
    this.elememt.setAttribute('class', 'page')
    this.elememt.textContent = 'This is PageComponent'
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.elememt)
  }
}
