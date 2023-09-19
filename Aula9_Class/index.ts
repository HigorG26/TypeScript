interface showTitle{
    itemTitle() : string
}
class blogSpot implements showTitle {
    title

    constructor(title:showTitle) {
        this.title = title
    }
    itemTitle() {
        return `O titulo do pst é: ${this.title}`
    }
}

// public method
 class A {
    public x = 10
 }

 class B {
    public x = 15
 }

 const Aa = new A()
 const Bb = new B()
 console.log(Aa)

// statis member

class StaticsMembers {
    prop = "teste estatitco"
}
