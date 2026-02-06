# program to check if a person is eligible to vote or not
echo "Enter your age: "
read age
if [ $age -ge 18 ]
then
    echo "You are eligible to vote."
else
    echo "You are not eligible to vote."
fi