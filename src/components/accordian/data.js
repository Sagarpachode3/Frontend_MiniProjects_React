const data = [
  {
    id: "1",
    question:
      "What is the main difference between Java and C# programming languages?",
    answer:
      "One key difference between Java and C# is their primary platform. Java is designed to be platform-independent, running on the Java Virtual Machine (JVM), while C# is primarily used within the Microsoft ecosystem, running on the .NET Framework or .NET Core.",
  },

  {
    id: "2",
    question: "How do you handle exceptions in Java and C#?",
    answer:
      "In Java, exceptions are handled using try-catch blocks, where the code that may throw an exception is enclosed within a try block, and the handling code is placed within catch blocks. In C#, similar try-catch blocks are used for exception handling, with the addition of finally blocks for cleanup code that needs to run regardless of whether an exception occurs.",
  },

  {
    id: "3",
    question: "What are the differences between MySQL and SQL Server?",
    answer:
      "MySQL is an open-source relational database management system (RDBMS) primarily used in web development and applications requiring a database backend. SQL Server, developed by Microsoft, is a commercial RDBMS offering a wide range of features including advanced analytics, business intelligence, and integration with Microsoft products.",
  },

  {
    id: "4",
    question: "Explain the concept of inheritance in Java and C#.",
    answer:
      "In both Java and C#, inheritance allows a class (subclass or derived class) to inherit properties and behaviors from another class (superclass or base class). This promotes code reusability and enables the creation of a hierarchy of classes. In Java, single inheritance is supported, while C# supports both single and multiple inheritance through interfaces.",
  },

  {
    id: "5",
    question: "What is the role of JDBC in Java and ADO.NET in C#?",
    answer:
      "JDBC (Java Database Connectivity) is a Java API used to interact with relational databases, providing a standard interface for database access. ADO.NET (ActiveX Data Objects .NET) is a set of libraries in the .NET Framework used for data access, allowing developers to connect to databases, execute queries, and manipulate data in C# applications.",
  },
];
export default data;
