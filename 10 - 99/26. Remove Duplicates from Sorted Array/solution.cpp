class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int counter = 1;
        for(int i = 1; i < nums.size(); i++) {
            if(nums.at(i) != nums.at(i - 1)) {
                nums.at(counter++) = nums.at(i);
            }
        }
        

        return counter;
    }
};