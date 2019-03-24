#include <iostream>
#include <cassert>
using namespace std;

#include "foo.h"

//This is a predefinided function
#if ABC
void foo() {}
#endif

//This is a Macro
#define MUL(a, b) a*b

int main() 
{
	int x = 1;
	int y = add1(x);

	assert(MUL(2, 2+2) == 8);
	 
	foo();
	
	cout << "Hello, C++" << endl;
	getchar();

	return 0;
}