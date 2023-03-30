/**
 * 给定一组物品，每个物品有重量和价值，在重量不超过6的情况下，选择价值最大的物品
 * weight [2, 1, 5, 4, 3, 6]
 * value [10, 4, 7, 1, 5, 15]
 */

// 1.规划目标值：价值
// 2.设定维度1：拆分限制条件，在不同限制条件下寻找规律: 不同的重量
// 3.设定维度2：拆分取值范围，在不同集合条件下寻找规律：物品集合

// 公式: 二维数组
// dp[i][j] = Max(dp[i-1][j], value[i]+dp[i-1][j-weight[i]])
// 优化方程：滚动一维数组
// next[j] = Max(result[j], value[i]+result[j-weight[i]])

export function pack(limit: number, value: number[], weight: number[]) {
    let result:number[] = [];
    for (let j = 0; j <= limit; j++) {
        result[j] = j >= weight[0]?value[0]:0;
    }
    for (let i = 1,len=value.length; i < len; i++) {
        let next:number[] = []
        for(let j = 0; j <= limit; j++) {
            if (j >= weight[i]) {
                next[j] = Math.max(result[j], value[i] + result[j-weight[i]])
            } else {
                next[j] = result[j]
            }
        }
        result = next;
    }
    return result[limit]
}
