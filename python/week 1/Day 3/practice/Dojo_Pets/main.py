from ninja import*
from pets import*

pet1=pet("cat","cat","tricks")
ninja1=ninja("alex","Duran",pet1,"treats","pet food")

ninja1.feed().walk().bathe()