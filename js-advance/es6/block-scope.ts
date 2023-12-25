function exampleScopes() {
    if (true) {
      var functionScopedVar = "I am function-scoped!";
    }
    console.log(functionScopedVar);
    if (true) {
      let blockScopedLet = "I am block-scoped!";
      const blockScopedConst = "I am also block-scoped!";
      console.log(blockScopedLet); 
      console.log(blockScopedConst); 
    }
  }
  exampleScopes();
  