

====OBJECTIVE=====

write test the JavaScript with Jasmine.

1. Understand what jasmine and unit testing are

2. define describe(), it(), matchers(), spies()

3. write better test with before and after hooks

4. write asynchronous test with clocks() and done() callbacks 

5. compare and contrast TDD and BDD and differentiate between unit and other kinds of test

6. write unit test using jasmine


1. preventable  : dapat dicegah,


===With test! ===

    == Specifically unit test! ==

		unit test, test parts of an application(or units). Very commonlt, each unit is tested individuallt and independently to ensure an application is running as expected


== Wath we need ==

	1. a Framework to write test

	2. a way describing the code we are testing

	3. a tool where we can make assertions or expectation about our code


== Introducing Jasmine ==

	.- Comes with everything we need to test our code!

	.- Works will all kind of JavaScript environment

	.- simple syntax to quickly get up and running with

	.- be working in the browser!

	.- there's other framework "Mocha&Chai" for testing


=== ESSENTIAL KEYWORD AND FUNCTION ===

	1. describe()

	2. it()

		it function inside describe function call a spec

	3. expect() 

		expect funtion inside it function
		is short of spefication


== A Conceptual exercise ==

    /**
        Sudo code 
    */

		describe("Earth")
		    it("is round")
		        expect(earth.isRound.toBe(true))
		    it("is the third planet from the sun")
		        expect("earth.numberFromSun").toBe(3)


ei. In Code

	Always The second paramater inside describe(), it() is a callback function.the method inside a expect() is call a matcher().    
   

			Var earth = {
				isRound: true,
				numberFromSun: 3
			}

			describe("Earth", function() {
				it("is round", function() {
				    expect(earth.isRound).toBe(true);
				});
				it("is the third planet from the sun", function*() {
				    expect(earth.numebrFromSun).tobe(3)
				});
			});


=== Mathcers ====

	Matchers are the function that you attach to result of the expect().


matchers :

    1. toBe()/ not.toBe()
        
    .-use tripple equal ==== to compare value with another


    2. tobBeCloseTo()
  
    .- compare two values and except second parameter for precition, it's usefull for who only care for something's similiar to another not exaclty the same
  
    3. toBeDefined()

    .-certain variable specifiec value and not undefined

    4. toBeFalsey() / toBeLessThan()

    .- except a value one converted to the bolean to be true or false

    5. toBeGreaterThan() / toBeLessThan()

    .- helpfull with number
    
    6. toContain()

    .- if the value contain in array 

    7. toEqueal()

    .-  accept two different object event different references different memori


    // it's not a macher but helpfully tools

    8. jasmine.any()

        typeOf 
    9. beforeEach() / afterEach()


    10. BeforeAll/ afterAll
    

==example of jasmine used on the testing ===


	describe("Jasmie Mathcers", functions() {
	    
	    it("allow for === and deep equality", function() {
	        expect(1+1).toBe(2);
	        expect([1,2,3]).toEqual([1,2,3]);
	    });

	    it("allows for easy precision checking", function() {
	        expect(3.1415).toBeCloseTo(3.14.2);
	    });

	    it("allows for easy truthy / falsy checking", function() {
	        expect(0).toBeFalsy();
	        expect([]).toBeTruthy();
	    });

	    it("allow fir checking contents of an object", function() {
	        expect([1,2,3]).toContain(1);
	        expect({name:'elie'}).toEqual(jasmine.ObjectContaining({name"Elie"}));
	    });

	    it("allows for easy type checking", function() {
	        expect([]).toEqual(jasmine.any(Array));
	        expect(function(){}).toEqual(jasmine.any(Function));
	    })
	})

	 


=== example the bad testing ==== 

    /**
    defining var arr repeat it over and over.

    **/

		describe('#push', function() {
		    it("add elements to an array", function() {
		        var arr = [1,3,5];
		        arr.push(7);
		        expect(arr).toEqual([1,3,5,7]);
		    });

		    it("returns the new length of the array", function() {
		        var arr = [1,3,5];
		        expect(arr.push(7)).toBe(4);
		    });

		    it("adds anything into the array", function() {
		        expect(arr.push({})).toBe(4);
		    });
		    
		});


==== how writing better test with Hooks ===

          
    /**
    BeforeEach() 

    .- run beforeEach "it" callback

    .-because a 'scoping' in JavaScript

    .- beforeEach() now a global variabel, so it() can called with loose copling
    
    */
		   
	    describe("Arrays", function() {
		    var arr;

		    beforeEach(function() {
		        arr = [1,3,5];
		    });

		    it("add elements to an array", function() {
		        arr.push(7);
		        expect(arr).toEqual([1,3,4,5,7])
		    })

		    it("return the new length of the array", function() {
		        expect(arr.push(7)).toBe(4);
		    })

		    it("add anyting into the array", function() {
		        expect(arr.push({})).toBe(4);
		    })
		});


    /**
        afterEach()

    .- run after each "it" callback-useful for teardown

    .- afterEach() is to reset variable use between tasks

    .-teardown is to ensure you use data still same between tasks

    .-teardown is usually used for testing databases with
    */

		 describe("Counting", function() {
		     var count = 0;

		     beforeEach(function() {
		         count++;
		     });

		     afterEach(function() {
		         count= 0;
		     });

		     it("has a counter that increments", function() {
		         expect(count).toBe(1);
		     });

		     it("gets reset", function() {
		         expect(count).toBe(1);
		     }); 
		 });

    /**
    
    11. BeforeAll/ afterAll
    
    */

        var arr= [];
        beforeAll(function() {
            arr = [1,2,3];
        })

        describe("Counting", function() {
            it("starts with an array", function() {
                arr.push(4);
                expect(1).toBe(1);
            });

            it("keeps mutating that array", function() {
                console.log(arr); // [1,2,3,4]
                arr.push(5);
                expect(1).toBe(1);
            });
        });

        describe("Again", function() {
            it("keep mutating the array --again", function() {
                console.log(arr);//[1,2,3,4,5]
                expect(1).toBe(1);
            });
        });


=== nesting describe block ===

	.- its how describe specific high level topic that running the test also describe nest.


    /**
    
    
    */

		describe("Array", function() {
		    var arr;
		    beforeEach(function() {
		        arr = [1,3,5];
		    });

		    describe("#unshift", function() {

		        it("adds an element to the beginning of an array", function() {
		            arr.unshift(17);
		            expect(arr[0].toBe(17));
		        });

		        it("returns the new length", function() {
		            expect(arr.unshift(1000)).toBe(4);
		        });
		    });

		    describe("#push", function() {
		        
		        it("adds elements to the end of an array", function() {
		            arr.push(7);
		            expect(arr[arr.lenght-1]).toBe(7);
		        });

		        it("return the new length", function() {
		            expect(arr.push(1000)).toBe(4);
		        });
		    });
		})



    == pending test ===

    .-marker the test to pending placing it with "x" before 'it"

    .- if the one testing is for one unit is need more then 1 expect use mmore seperate it block.

    /**
    use xit(); to pending.
    
    */

		describe("Pending specs", function() {
		    xit("can start with an xit", function() {
		        expect(true).toBe(true);
		    });
		
		    it("is a pending test if there is no callback funtion"); 

		    it("is pending if the pending function is ivoked inside the callback", function() {
		        expect(2).toBe(2);
		        pending();
		    });
		});

  
  == One or more expect ==

    /**
    if the testing is one unit needs more then one expect(), use more just make sure you not test several aspect of the unit that not belong togheter in singgle task case 
    
    not great
	*/

		 describe("Earth", function() {
		    it("is round and has a method to check what number it's from the sun", function() {
		        expect(earth.isRound()).toBe(true);
		        expect(earth.howFarFromSun).toBe(jasmine.any(function));
		        expect(earth.howFarFromSun()).toBe(3);
		    })
		})

		/**
		better
		*/

		describe("Earth", function() {
		    it("is round", function() {
		        expect(earth.isRound()).toBe(true);            
		    })
		    it("has a method to check what number it's from the sun", function() {
		        expect(earth.howFarFromSun).toBe(jasmine.any(function));
		        expect(earth.howFarFromSun()).toBe(3);
		        
		    })
		})


=== USING SPIES ====   

    .-mocking is a fake object that poses as a function.

    .-jasmine has test double function called spies.
    
    .-A spy can stub(mimic) any function and track calls to it and all arguments

    .-spies only exist in the describe or it block in which it is defined.

    .-spies are removed after each speies.

    .- there are special matcher for interacting with spies


=== make a spies : ====

    1.spies on funtion and 

        function add(a,b,c) {
            return a+b+c;
        }

    2.jasmine.createSpy();

        describe("add", function() {
            var addSpy, result;
            beforeEch(function() {
                addSpy = spyOn(window, "add");
                result = addSpy();
            })

            it("is can have param tested", function() {
                expect(addSpy).toHaveBeenCalled();
            });
        });


=== Testing parameters ===
	
	/**
	
	
	*/
        function add(a,b,c) {
            return a+b+c;
        }
        describe("add", function() {
            var addSpy, result;
            beforeEach(function() {
                addSpy = spyOn(window, 'add');
                result = addSpy(1,2,3);
            });

            it("is can have param tested", function() {
                expect(addSpy).toHaveBeenCalled();
                expect(addSpy).toHaveBeenCalled(1,2,3);
            });
        });


=== Returning a Value ====

	/**
	
	
	*/

        function add(a,b,c) {
            return a+b+c;
        }
        describe("add", function() {
            var addSpy, result;
            beforeEach(function() {
                addSpy = spyOn(window, 'add').and.callThrough(;
                result = addSpy(1,2,3);
            });

            it("is can have param tested", function() {
                expect(result).toEqual(6);
                
            });
        });



=== Testing Frequency ====
    
	/**
	
	
	*/

		function add(a,b,c) {
		    return a+b+c;
		}
		describe("add", function() {
		    var addSpy, result;
		    beforeEach(function() {
		        addSpy = spyOn(window, 'add').and.callThrough(;
		        result = addSpy(1,2,3);
		    });

		    it("is can have param tested", function() {
		        expect(addSpy.call.any()).toBe(true);
		        expect(addSpy.call.count()).toBe(1);
		        expect(result).toEqual(6);                
		    });
		});


=== Clock ====


    .- the jasmine Clock is available for testing time dependent code.

    .- it's installed by invoking jasmin.clock().install()

    .- be sure to uninstall the clock after you are done to restore the original functions



=== setTimeout ===

	/**
	    var sample is a dummy 
	*/


		describe("a simple setTimeOut", function() {
			var sample; 
			beforeEach(function() {
			    sample = jasmine.createSpy("sampleFunction");
			    jasmine.clock().install();
			})

			afterEach(function() {
			    jasmine.clock().uninstall();
			});
		
			it("is only invoked after 1000 ms", function() {
			    setTimeout(function() {
			        sample();
			    }, 1000);
			    jasmine.clock().tick(999);
			    expect(sample).not.toHaveBeenCalled();
			    jasmine.clock().tick(1);
			    expect(sample).toHaveBeenCalled();
			});
		});



=== setInterval ===

	/**

	*/
		describe("a simple setTimeOut", function() {
		    var dummyFunction;
		    
		    beforeEach(function() {
		    dummyFunction = jasmine.createSpy("dummyFunction");
		    jasmine.clock().install();
		 })

		    afterEach(function() {
		        jasmine.clock().uninstall();
		    });
		
		    it("checks to see the number of times the function is invoked", function() {
		        setInterval(function() {
		            dummyFunction();
		        }, 1000);
		        jasmine.clock().tick(999);
		        expect(dummyFunction.calls.count()).toBe(0);
		        jasmine.clock().tick(1000);
		        expect(dummyFunction.calls.count()).toBe(1);
		        jasmine.clock().tick(1);
		        expect(dummyFunction.calls.count()).toBe(2);
		    });
		});

    
=== Testing async code ====

    .- Jasmine also has support for runnig specs that require testing asnyc code

    .- beforeAll(), afterAll(), beforeEach(), afterEach(), and it take an optional single argument(commonlt called 'done()') that should be called when the async work is complete

    .- a test will not complete untill it's 'done()' is called
    


==== Async Test ===
	
	/**
	notice done() being passed and used in the callback function
	
	*/

		function getUserInfo(username) {
		    return$.getJSON('https://api.github.com/users/' + username);
		}

		describe("#getUserInfo", function() {
		    it("return the correct name for the user", function(done) {
		        getUserInfo("eile").then(function(data) {
		            expect(data.name).toBe('Elie Schoppik');
		            done();
		        });
		    });

		});

=== TDD - Test Driven Development ====

    RED ==== GREEN ==== BLUE Behavior approach

    1. Write the tests (RED)
    2. see the test fail (GREEN)
    3. write code to pass the tests (BLU)
    4. refacator code as necessary (RED)
    5. repeat.


=== BDD - Behavior Driven Development ====

    .- Is a subset framework of TDD.

    .- Not Mutual exclusive with TDD

    .- Involves being verbose with our style and describing the behavior of the functionality 

    .- Helpful when testing the design of the software


    === Different Type a Testing ====

    usually you just test a Unit Testing.

    
	=== integration testing ====

    integration testing build of unit testing


    === Acceptance test === 

    is to evaluate the business system all


    === Strees test ===

    how the determine test when chaotic happen


    === Recap ===

		.- unit testing involves testing pieces of functionality

		.- jasmine is a testing framework that allow us to easily write unit tests

		.- jasmine has quite a few mathcers for testing almost any kind of expectation

		.- using beforeEachg()/afterEach()/beforeAll)()/ afterAll() hooks can help reduce duplcation and confusion

		.- jasmine provides spies for mimicking the behavior of a function

		.- jasmine provides a clock object for testing timers and a callback function for testing asynchronous code.

		.- jasmine BDD style framework

		.- unit testing is just one part of testing applications.
