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
    def enroll(self):
        if(self.is_rewards_member):
            print("user already a member") 
            return False 
        else:
            self.is_rewards_member=True
            self.gold_card_points=200 
            return True
    def spend_points(self, amount):
        self.gold_card_points=self.gold_card_points - amount

user1=users("yassin","benabdallah","yasssinbn@gmail.com",22) 
user2=users("nourhene","amdouni","nourhene803@gamil",21)
user1.dispaly_info() 
print("*"*50)
user1.enroll()
user1.dispaly_info() 
print("*"*50)   
user1.spend_points(50)
user1.dispaly_info()
print("#"*100)
user2.dispaly_info() 
print("*"*50)
user2.enroll()
user2.dispaly_info() 
print("*"*50)   
user2.spend_points(80)
user2.dispaly_info()
