class Solution:
    def removeDuplicates(self, nums) -> int:
        counter = 1
        for i in range(1, len(nums)):
            if(nums[i - 1] != nums[i]):
                nums[counter] = nums[i]
                counter += 1
        return counter