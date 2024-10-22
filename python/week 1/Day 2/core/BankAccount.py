class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        self.int_rate=int_rate
        self.balance=balance


    def deposit(self, amount):
        self.balance=self.balance+amount
        return self

    def withdraw(self, amount):
        if (self.balance < amount):
            print("Insufficient funds: Charging a $5 fee")
            self.balance=self.balance - 5
        else:
            self.balance=self.balance - amount
        return self

    def display_account_info(self):
        print(f"Balance : ${self.balance}")
        return self

    def yield_interest(self):
        if self.balance>0:
            self.balance=self.balance+(self.balance * self.int_rate)
        return self

acount1=BankAccount(0.02,500)
acount2=BankAccount(0.03,600)

acount1.deposit(100).deposit(20).deposit(200).withdraw(200).yield_interest().display_account_info()
print("#"*40)
acount2.deposit(600).deposit(500).withdraw(20).withdraw(10).withdraw(200).withdraw(200).yield_interest().display_account_info()