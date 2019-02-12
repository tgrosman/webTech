Rekursion:

%1a 
connection(X,Y) :- directConnection(X,Y,_).
connection(X,Y) :-directConnection(X,Z,_), connection(Z,Y).

%1b
count(X,Y,Count,Erg) :- directConnection(X,Y,_),Count=Erg.
counter(X,Y,Count,Erg) :- directConnection(X,Z,_), Count2 is Count+1,
							count(Z,Y,Count2,Erg).


count(X,Y,Erg) :- directConnection(X,Y,_),Erg=1.
counter(X,Y,Erg) :- directConnection(X,Z,_),count(Z,Y,Erg2), Erg is Erg2+1.

%1c

distance(X,Y,Erg) :- directConnection(X,Y,Erg).
distance(X,Y,Erg) :- directConnection(X,Z,Erg3), distance(Z,Y,Erg4),
						Erg is Erg3+Erg4.


%1d

route(X,Y, List) :- directConnection(X,Y,_), write([Y,X | List]).
route(X,Y,List) :- directConnection(X,Z,_), route(Z,Y,[X | List]).


%1e

prime(X,Y) :- X=Y.
prime(X,Y) :-/+ 0 is X mod Y,Y2 is Y+1, prime(X,(Y2)).



%2a 
printList([]) :- 	 true.
printList( [H | T]) :-   write(H),wirte(" "),printList(T).


%2b
&Wrapper
rev(X,Y) :- rev2(X,[],Y)
rev2([],Y,Z) :- Z = Y
rev2([H|T],Y,Z) :- L = [H | Y], rev2(T,L,Z).

%2c

route2(X,Y, List) :- /+ member(Y,List), directConnection(X,Y,_),rev([Y,X | List],List2), printList(List2).
route2(X,Y,List) :- directConnection(X,Z,_), /+ member(Z,List),
route2(Z,Y,[X | List]).

%2d
route2(X,Y, List,Erg) :- /+ member(Y,List), directConnection(X,Y,_),rev([Y,X | List],List2), Erg = List2.
route2(X,Y,List,Erg) :- directConnection(X,Z,_), /+ member(Z,List),
							route2(Z,Y,[X | List],Erg).


allRoutes(X,Y,Out) :- findAll(Erg,route(X,Y,[],Erg),Out)


%2e
routeL(X,Y,List,Erg,L) :- /+ member(Y,List), directConnection(X,Y,L),rev([Y,X | List],List2), Erg = List2.
routeL(X,Y,List,Erg,L) :- directConnection(X,Z,L), /+ member(Z,List),
							route2(Z,Y,[X | List],Erg).
shortestRoute(X,Y,Out) :- findAll([Erg,Length],routeL(X,Y,[],Erg,Length)),
								member([R1,L1],Out, 
								/+ (member(R2,Out), last(R2,L2),L2 < L1.



						