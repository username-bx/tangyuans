---
title: java从入门到放弃 oop
shortTitle: java
icon: pen-to-square
date: 2025-06-20
order: 6
tag:
  - java
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: java
---
# 面向对象


## 面向对象的 5 大原则

面向对象的五大设计原则，简称 SOLID 原则，是由 Robert C. Martin（又称 Uncle Bob）提出的，是编写易维护、可扩展、可读性强的面向对象代码的重要指导思想。这五个原则分别是：

1. S - 单一职责原则（Single Responsibility Principle，SRP）
2. O - 开闭原则（Open/Closed Principle，OCP）
3. L - 里氏替换原则（Liskov Substitution Principle，LSP）
4. I - 接口隔离原则（Interface Segregation Principle，ISP）
5. D - 依赖倒置原则（Dependency Inversion Principle，DIP）

## 面向对象的 3 大特性


✅ 1. 封装（Encapsulation）
定义：把数据（属性）和操作数据的方法（行为）包装在一起，对外隐藏内部实现细节，只暴露必要的接口。

目的：

隐藏实现细节，提高安全性

降低外部对类内部的依赖

提高模块的独立性和可维护性

关键词： private、public、getter/setter

例子：
一个类的成员变量设置为私有（private），通过 getX() 和 setX() 访问。

✅ 2. 继承（Inheritance）
定义：子类继承父类的属性和方法，实现代码复用。子类可以拥有自己的新属性或重写父类的方法。

目的：

实现代码复用

建立层次结构（"是一个" 的关系）

关键词： extends（Java）、:（Python/C++）

例子：
Student 类继承自 Person 类，自动拥有 Person 的属性和方法。

✅ 3. 多态（Polymorphism）
定义：同一操作作用于不同对象时，可以表现出不同的行为。简单说：一个接口，多种实现。

目的：

提高程序的灵活性和可扩展性

便于使用抽象和接口进行编程

实现方式：

方法重载（Overloading）： 同一类中方法名相同，参数不同

方法重写（Overriding）： 子类重写父类的方法

接口/抽象类实现多态： 父类引用指向子类对象（如 Shape s = new Circle();）

✅ 4. 抽象（Abstraction）
定义：提取对象的共性特征，忽略细节，只关注对象的外部特征和行为，而不是内部实现。

目的：

隐藏复杂性

提高可扩展性与可维护性

关键词： abstract、interface

例子：
定义一个 Animal 抽象类，只声明 makeSound() 方法，由具体子类（如 Dog, Cat）实现具体行为。