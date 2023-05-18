const assertNever=(value:never):never=>{
   
    throw new Error(`This value :${value} should never be there`);

  }