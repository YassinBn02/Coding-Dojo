class users: 
    def __init__(self,first_name,last_name,email,age):
        self.first_name=first_name
        self.last_name=last_name
        self.email=email
        self.age=age 
        self.is_rewards_member =False 
        self.gold_card_points = 0 

    def dispaly_info(self):
        print(f"first name: {self.first_name}")
        print(f"last name: {self.last_name}")
        print(f"email :{self.email}")
        print(f"age: {self.age}")
        print(f"is reward member: {self.is_rewards_member}")
        print(f" gold card points: {self.gold_card_points}")
        return self

    def enroll(self):
            self.is_rewards_member=True
            self.gold_card_points=200 
            return self

    def spend_points(self, amount):
        self.gold_card_points=self.gold_card_points - amount
        return self

user1=users("yassin","benabdallah","yasssinbn@gmail.com",22) 
user2=users("nourhene","amdouni","nourhene803@gamil",21)

user1.dispaly_info().enroll().spend_points(50).dispaly_info()
print("*"*50)
user2.enroll().spend_points(80).dispaly_info()

