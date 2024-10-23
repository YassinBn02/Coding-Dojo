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

class Users:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)

    def make_deposit(self,amount):
        self.account.deposit(amount)
        return self

    def make_withdraw(self,amount):
        self.account.withdraw(amount)
        return self

    def display_user_balance(self):
        self.account.display_account_info()
        return self
    
user1=Users("yassin","yassinbn@gmail.com")
user2=Users("youssef","youssefbn@gmail")

user1.make_deposit(100).make_deposit(200).display_user_balance()
print("#"*50)
user2.make_withdraw(50).display_user_balance().make_deposit(200).display_user_balance()